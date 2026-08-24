import { useEffect, useState } from "react";
import sectorMappingSource from "../../../business_sector_arabic_mapping.md?raw";
import { HUBSPOT_CONFIG } from "../config";

type HubSpotCreateOptions = {
  portalId: string;
  formId: string;
  region: string;
  target: string;
  locale?: string;
  translations?: Record<string, Record<string, string>>;
};

declare global {
  interface Window {
    hbspt?: { forms: { create: (options: HubSpotCreateOptions) => void } };
    __hsFormsScriptLoading?: Promise<void>;
  }
}

const HUBSPOT_SCRIPT_ID = "hubspot-forms-v2-script";

const fieldCopy = {
  firstname: "الاسم الأول*",
  lastname: "اسم العائلة*",
  email: "البريد الإلكتروني للعمل*",
  phone: "رقم الجوال*",
  company: "اسم الشركة*",
  business_sector: "قطاع الأعمال*",
  message: "يرجى وصف احتياجك باختصار*",
} as const;

const validationCopy = {
  required: "هذا الحقل مطلوب.",
  email: "يرجى إدخال بريد إلكتروني صحيح للعمل.",
  phone: "يرجى إدخال رقم جوال صحيح.",
  sector: "يرجى اختيار قطاع الأعمال.",
  failure: "تعذر إرسال الطلب. يرجى المحاولة مرة أخرى أو التواصل معنا عبر واتساب.",
  success: "شكرًا لك. تم استلام طلبك وسيتواصل معك فريقنا خلال يوم عمل واحد.",
} as const;

function parseSectorMapping(source: string) {
  const entries = source
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("|") && !line.includes("English backend value") && !/^\|\s*-/.test(line))
    .map((line) => line.split("|").slice(1, -1).map((value) => value.trim()))
    .filter((columns): columns is [string, string] => columns.length === 2 && Boolean(columns[0]) && Boolean(columns[1]));

  return new Map(entries);
}

const sectorLabels = parseSectorMapping(sectorMappingSource);

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

function setAttributeIfChanged(element: Element, name: string, value: string) {
  if (element.getAttribute(name) !== value) element.setAttribute(name, value);
}

function setTextIfChanged(element: Element | null, value: string) {
  if (element && element.textContent !== value) element.textContent = value;
}

function localiseCountrySelector(form: HTMLFormElement) {
  const selector = form.querySelector<HTMLSelectElement>('select[id^="phone_ext-"]');
  if (!selector) return;

  setAttributeIfChanged(selector, "aria-label", "رمز الدولة*");
  setAttributeIfChanged(selector, "dir", "rtl");

  const displayNames = typeof Intl.DisplayNames === "function"
    ? new Intl.DisplayNames(["ar"], { type: "region" })
    : null;

  Array.from(selector.options).forEach((option) => {
    if (!option.value) {
      setTextIfChanged(option, "رمز الدولة*");
      return;
    }

    let countryName = option.textContent ?? option.value;
    try {
      countryName = displayNames?.of(option.value) ?? countryName;
    } catch {
      // Keep HubSpot's existing label if a non-standard region code is encountered.
    }
    const label = option.value === "SA" ? `${countryName} (\u2066+966\u2069)` : countryName;
    setTextIfChanged(option, label);
  });

  if (selector.value !== "SA") {
    selector.value = "SA";
    selector.dispatchEvent(new Event("input", { bubbles: true }));
    selector.dispatchEvent(new Event("change", { bubbles: true }));
  }
}

function localiseSectorSelector(form: HTMLFormElement) {
  const selector = form.querySelector<HTMLSelectElement>('select[name="business_sector"]');
  if (!selector) return;

  setAttributeIfChanged(selector, "aria-label", fieldCopy.business_sector);
  setAttributeIfChanged(selector, "dir", "rtl");

  Array.from(selector.options).forEach((option) => {
    if (!option.value) {
      setTextIfChanged(option, fieldCopy.business_sector);
      return;
    }
    const arabicLabel = sectorLabels.get(option.value);
    if (arabicLabel) setTextIfChanged(option, arabicLabel);
  });
}

function localiseValidation(form: HTMLFormElement) {
  form.querySelectorAll<HTMLElement>(".hs-error-msg").forEach((message) => {
    const field = message.closest(".hs-form-field");
    let copy = validationCopy.required;
    if (field?.querySelector('[name="email"]')) copy = validationCopy.email;
    if (field?.querySelector('[name="phone"], [id^="phone-"]')) copy = validationCopy.phone;
    if (field?.querySelector('[name="business_sector"]')) copy = validationCopy.sector;
    setTextIfChanged(message, copy);
  });

  form.querySelectorAll<HTMLElement>(".submitted-message").forEach((message) => {
    setTextIfChanged(message, validationCopy.success);
  });

  form.querySelectorAll<HTMLElement>(".hs_error_rollup .hs-main-font-element").forEach((message) => {
    setTextIfChanged(message, validationCopy.failure);
  });
}

function localiseForm(form: HTMLFormElement) {
  setAttributeIfChanged(form, "lang", "ar");
  setAttributeIfChanged(form, "dir", "rtl");
  setAttributeIfChanged(form, "data-arabic-localised", "true");

  (Object.entries(fieldCopy) as Array<[keyof typeof fieldCopy, string]>).forEach(([name, copy]) => {
    const field = form.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(`[name="${name}"]`);
    if (!field || field instanceof HTMLSelectElement || field.type === "hidden") return;
    setAttributeIfChanged(field, "placeholder", copy);
    setAttributeIfChanged(field, "aria-label", copy);
  });

  const visiblePhone = form.querySelector<HTMLInputElement>('input[type="tel"][id^="phone-"]');
  if (visiblePhone) {
    setAttributeIfChanged(visiblePhone, "placeholder", fieldCopy.phone);
    setAttributeIfChanged(visiblePhone, "aria-label", fieldCopy.phone);
    setAttributeIfChanged(visiblePhone, "dir", "ltr");
  }

  const email = form.querySelector<HTMLInputElement>('input[name="email"]');
  if (email) setAttributeIfChanged(email, "dir", "ltr");

  const submit = form.querySelector<HTMLInputElement>('input[type="submit"]');
  if (submit && submit.value !== "إرسال الطلب") submit.value = "إرسال الطلب";

  localiseCountrySelector(form);
  localiseSectorSelector(form);
  localiseValidation(form);
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
    let observer: MutationObserver | null = null;

    const mountForm = async () => {
      try {
        await loadHubSpotScript();
        if (cancelled || !window.hbspt) return;

        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = "";

        observer = new MutationObserver(() => {
          const form = container.querySelector<HTMLFormElement>("form");
          if (form) localiseForm(form);
          const submittedMessage = container.querySelector<HTMLElement>(".submitted-message");
          if (submittedMessage) setTextIfChanged(submittedMessage, validationCopy.success);
        });
        observer.observe(container, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });

        window.hbspt.forms.create({
          portalId: HUBSPOT_CONFIG.portalId,
          formId: HUBSPOT_CONFIG.formId,
          region: HUBSPOT_CONFIG.region,
          target: `#${containerId}`,
          locale: "ar",
          translations: {
            ar: {
              required: validationCopy.required,
              invalidEmail: validationCopy.email,
              invalidNumber: validationCopy.phone,
              submitText: "إرسال الطلب",
            },
          },
        });
      } catch {
        if (!cancelled) setLoadFailed(true);
      }
    };

    void mountForm();
    return () => {
      cancelled = true;
      observer?.disconnect();
    };
  }, [containerId]);

  return (
    <div className={`hubspot-form-container hubspot-form-container--${theme} ${className ?? ""}`}>
      <div id={containerId} />
      {loadFailed && (
        <p role="alert" className="text-center text-[14px] leading-[1.7] text-[#4a5568]">
          تعذر إرسال الطلب. يرجى المحاولة مرة أخرى أو التواصل معنا عبر واتساب.
        </p>
      )}
    </div>
  );
}
