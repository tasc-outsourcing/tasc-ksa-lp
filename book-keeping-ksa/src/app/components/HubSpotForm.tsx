import { useEffect, useState } from "react";
import { HUBSPOT_CONFIG } from "../config";

type HubSpotCreateOptions = {
  portalId: string;
  formId: string;
  region: string;
  target: string;
  onFormReady?: (form: HTMLFormElement) => void;
};

declare global {
  interface Window {
    hbspt?: { forms: { create: (options: HubSpotCreateOptions) => void } };
    __hsFormsScriptLoading?: Promise<void>;
  }
}

const HUBSPOT_SCRIPT_ID = "hubspot-forms-v2-script";

function loadHubSpotScript() {
  if (window.hbspt) return Promise.resolve();
  if (window.__hsFormsScriptLoading) return window.__hsFormsScriptLoading;

  window.__hsFormsScriptLoading = new Promise<void>((resolve, reject) => {
    const existing = document.getElementById(HUBSPOT_SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      if (window.hbspt) {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Failed to load HubSpot script")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = HUBSPOT_SCRIPT_ID;
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.src = "https://js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load HubSpot script"));
    document.body.appendChild(script);
  });

  return window.__hsFormsScriptLoading;
}

type HubSpotFormProps = {
  containerId: string;
  theme: "dark" | "light";
  className?: string;
};

export function HubSpotForm({ containerId, theme, className }: HubSpotFormProps) {
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const mountForm = async () => {
      try {
        await loadHubSpotScript();
        if (cancelled || !window.hbspt) return;

        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = "";

        window.hbspt.forms.create({
          portalId: HUBSPOT_CONFIG.portalId,
          formId: HUBSPOT_CONFIG.formId,
          region: HUBSPOT_CONFIG.region,
          target: `#${containerId}`,
        });
      } catch {
        if (!cancelled) setLoadFailed(true);
      }
    };

    void mountForm();
    return () => {
      cancelled = true;
    };
  }, [containerId]);

  return (
    <div className={`hubspot-form-container hubspot-form-container--${theme} ${className ?? ""}`}>
      <div id={containerId} />
      {loadFailed && (
        <p role="alert" className="text-center text-[13px] leading-[1.6] text-[#4a5568]">
          Share your details and our team will be in touch within one working day.
        </p>
      )}
    </div>
  );
}
