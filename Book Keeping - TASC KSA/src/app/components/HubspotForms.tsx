import { useEffect } from "react";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          portalId: string;
          formId: string;
          region?: string;
          target?: string;
        }) => void;
      };
    };
  }
}

const HUBSPOT_SCRIPT_SRC = "//js.hsforms.net/forms/embed/v2.js";
const HUBSPOT_PORTAL_ID = "20309062";
const HUBSPOT_FORM_ID = "3337a23f-2183-4a0b-b85b-b15b05172c6f";
const HUBSPOT_REGION = "na1";
const HUBSPOT_TARGETS = ["#hubspot-form-hero", "#hubspot-form-cta"];

function fixPhoneFieldLayout(form: Element) {
  // Find the country-code select and tel input across all fieldsets
  const countrySelect = form.querySelector<HTMLSelectElement>(
    "select[name*='country'], select[name*='phone'], .hs-phone-number-field-country-code select, .hs_phone_country_code select, .hs_mobilephone_country_code select"
  );
  const telInput = form.querySelector<HTMLInputElement>(
    "input[type='tel'], input[name*='phone'], input[name*='mobile']"
  );

  if (!countrySelect || !telInput) return;

  const countryFieldset = countrySelect.closest("fieldset");
  const telFieldset = telInput.closest("fieldset");

  // Already in the same fieldset — only need CSS
  if (!countryFieldset || !telFieldset || countryFieldset === telFieldset) return;

  // Find the individual .hs-form-field wrappers
  const countryField = countrySelect.closest(".hs-form-field") as HTMLElement | null;
  const telField = telInput.closest(".hs-form-field") as HTMLElement | null;
  if (!countryField || !telField) return;

  // Build a single flex row and insert it where the country fieldset was
  const wrapper = document.createElement("div");
  wrapper.style.cssText = "display:flex;flex-direction:row;gap:8px;align-items:flex-start;margin-bottom:12px;";

  countryField.style.cssText = "flex:0 0 100px;min-width:0;";
  telField.style.cssText = "flex:1 1 0;min-width:0;";

  wrapper.appendChild(countryField);
  wrapper.appendChild(telField);

  // Remove now-empty fieldsets and insert the wrapper
  const parent = countryFieldset.parentElement!;
  const insertBefore = countryFieldset.nextSibling;
  countryFieldset.remove();
  if (telFieldset.parentElement) telFieldset.remove();

  parent.insertBefore(wrapper, insertBefore);
}

export function HubspotForms() {
  useEffect(() => {
    const observers: MutationObserver[] = [];

    const watchForForm = (target: string) => {
      const container = document.querySelector(target);
      if (!container) return;

      const obs = new MutationObserver(() => {
        const form = container.querySelector("form");
        if (!form) return;
        // Wait a tick for HubSpot to finish injecting all fields
        setTimeout(() => {
          fixPhoneFieldLayout(form);
          obs.disconnect();
        }, 100);
      });

      obs.observe(container, { childList: true, subtree: true });
      observers.push(obs);
    };

    const createForms = () => {
      if (!window.hbspt) return;

      HUBSPOT_TARGETS.forEach((target) => {
        const container = document.querySelector(target);
        if (!container || container.querySelector(".hbspt-form")) return;

        watchForForm(target);

        window.hbspt.forms.create({
          portalId: HUBSPOT_PORTAL_ID,
          formId: HUBSPOT_FORM_ID,
          region: HUBSPOT_REGION,
          target,
        });
      });
    };

    if (window.hbspt) {
      createForms();
      return () => observers.forEach((o) => o.disconnect());
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${HUBSPOT_SCRIPT_SRC}"]`,
    );
    if (existingScript) {
      existingScript.addEventListener("load", createForms, { once: true });
      return () => {
        existingScript.removeEventListener("load", createForms);
        observers.forEach((o) => o.disconnect());
      };
    }

    const script = document.createElement("script");
    script.src = HUBSPOT_SCRIPT_SRC;
    script.async = true;
    script.charset = "utf-8";
    script.onload = createForms;
    document.body.appendChild(script);

    return () => {
      script.onload = null;
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return null;
}
