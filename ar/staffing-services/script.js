(function () {
  "use strict";

  // HubSpot form "TASC KSA Recruitment Agency (Arabic) - LP" (routes to KSA Division; captures UTMs + gclid)
  var HUBSPOT = { portalId: "20309062", formId: "ad6a3447-5ff2-4fc8-ac1f-69a947360fc3", region: "na1" };
  var LP = "ar-staffing-services";
  window.dataLayer = window.dataLayer || [];
  var params = new URLSearchParams(window.location.search);

  /* ---------- Services: Arabic label -> HubSpot how_can_we_help_ value ---------- */
  var SERVICES = [
    { value: "Contract staffing", label: "التوظيف بعقود" },
    { value: "Temp Staffing", label: "التوظيف المؤقت" },
    { value: "Permanent hire", label: "التوظيف الدائم" },
    { value: "PEO/EOR", label: "صاحب العمل المسجل (PEO / EOR)" }
  ];
  var VALID = SERVICES.map(function (s) { return s.value; });

  /* ---------- Ad group message match (?ag=1..5) ---------- */
  var VARIANTS = {
    "2": { h1: "توفير موظفين بعقود لمنشأتك على كفالة تاسك", service: "Contract staffing" },
    "3": { h1: "موظفون مؤقتون لمواسم الذروة والمشاريع", service: "Temp Staffing" },
    "4": { h1: "توظيف دائم للكفاءات التي تحتاجها منشأتك", service: "Permanent hire" },
    "5": { h1: "صاحب العمل المسجل: وظّف فريقك في السعودية دون تأسيس كيان", service: "PEO/EOR" }
  };
  var ag = params.get("ag");
  var preselect = null;
  if (ag && VARIANTS[ag]) {
    var h1 = document.querySelector("[data-variant-h1]");
    if (h1) h1.textContent = VARIANTS[ag].h1;
    preselect = VARIANTS[ag].service;
  }
  if (params.get("service") && VALID.indexOf(params.get("service")) > -1) preselect = params.get("service");

  /* ---------- Click tracking + service buttons ---------- */
  document.addEventListener("click", function (e) {
    var el = e.target.closest ? e.target.closest("[data-track], [data-service]") : null;
    if (!el) return;
    if (el.hasAttribute("data-service")) setServiceEverywhere(el.getAttribute("data-service"));
    if (el.hasAttribute("data-track")) window.dataLayer.push({ event: el.getAttribute("data-track"), lp: LP, ad_group: ag || "" });
  });

  /* ---------- Form localisation ---------- */
  var PLACEHOLDERS = {
    firstname: "الاسم الأول*", lastname: "اسم العائلة*", email: "البريد الإلكتروني للعمل*",
    phone: "رقم الجوال*", mobilephone: "رقم الجوال*", company: "اسم المنشأة*", jobtitle: "المسمى الوظيفي",
    message: "صف احتياجك: عدد الموظفين، الأدوار، المدينة، المدة*"
  };
  var COPY = {
    required: "هذا الحقل مطلوب.",
    email: "يرجى إدخال بريد إلكتروني صحيح للعمل.",
    phone: "يرجى إدخال رقم جوال صحيح.",
    submit: "اطلب عرض توظيف",
    success: "شكراً لك. استلمنا طلبك وسيتواصل معك مختص توظيف قريباً.",
    failure: "تعذر إرسال الطلب. يرجى المحاولة مرة أخرى أو الاتصال بنا على \u2066+966 11 216 6218\u2069.",
    picker: "الخدمة المطلوبة*",
    pickerPrompt: "اختر الخدمة"
  };

  function setText(el, value) { if (el && el.textContent !== value) el.textContent = value; }
  function setAttr(el, name, value) { if (el && el.getAttribute(name) !== value) el.setAttribute(name, value); }

  function setHidden(form, value) {
    var input = form.querySelector('input[name="how_can_we_help_"]');
    if (input && input.value !== value) {
      input.value = value;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.dispatchEvent(new Event("change", { bubbles: true }));
    }
  }

  function setServiceEverywhere(value) {
    if (VALID.indexOf(value) < 0) return;
    preselect = value;
    document.querySelectorAll("select.svc-select").forEach(function (sel) {
      sel.value = value;
      var form = sel.closest("form");
      if (form) setHidden(form, value);
    });
  }

  function addPicker(form) {
    if (form.querySelector(".svc-picker")) return;
    var wrap = document.createElement("div");
    wrap.className = "svc-picker";
    var id = "svc-" + Math.random().toString(36).slice(2, 8);
    var opts = '<option value="">' + COPY.pickerPrompt + "</option>" + SERVICES.map(function (s) {
      return '<option value="' + s.value + '">' + s.label + "</option>";
    }).join("");
    wrap.innerHTML = '<label for="' + id + '">' + COPY.picker + '</label><select id="' + id + '" class="svc-select" required>' + opts + "</select>";
    form.insertBefore(wrap, form.firstChild);
    var sel = wrap.querySelector("select");
    if (preselect) { sel.value = preselect; setHidden(form, preselect); }
    sel.addEventListener("change", function () {
      if (sel.value) {
        setHidden(form, sel.value);
        window.dataLayer.push({ event: "service_select", service: sel.value, lp: LP });
      }
    });
  }

  function localise(form) {
    setAttr(form, "lang", "ar");
    setAttr(form, "dir", "rtl");
    form.querySelectorAll("input:not([type=hidden]), textarea").forEach(function (input) {
      var name = input.getAttribute("name") || "";
      var ph = PLACEHOLDERS[name] || (input.tagName === "TEXTAREA" ? PLACEHOLDERS.message : null);
      if (ph) { setAttr(input, "placeholder", ph); setAttr(input, "aria-label", ph); }
      if (input.type === "email" || input.type === "tel") setAttr(input, "dir", "ltr");
    });
    form.querySelectorAll(".hs-error-msg").forEach(function (msg) {
      var field = msg.closest(".hs-form-field");
      var input = field && field.querySelector("input, textarea, select");
      var name = input ? input.getAttribute("name") : "";
      setText(msg, name === "email" ? COPY.email : (name === "phone" || name === "mobilephone") ? COPY.phone : COPY.required);
    });
    var phoneExt = form.querySelector('select[id^="phone_ext-"]');
    if (phoneExt && !phoneExt.dataset.saSet) {
      phoneExt.dataset.saSet = "1";
      var names = typeof Intl.DisplayNames === "function" ? new Intl.DisplayNames(["ar"], { type: "region" }) : null;
      Array.prototype.forEach.call(phoneExt.options, function (o) {
        if (!o.value) return;
        try { o.textContent = o.value === "SA" ? "السعودية" : ((names && names.of(o.value)) || o.textContent); } catch (err) { /* keep */ }
      });
      if (phoneExt.value !== "SA") { phoneExt.value = "SA"; phoneExt.dispatchEvent(new Event("change", { bubbles: true })); }
    }
    var submit = form.querySelector('input[type="submit"]');
    if (submit && submit.value !== COPY.submit) submit.value = COPY.submit;
    form.querySelectorAll(".hs_error_rollup .hs-main-font-element").forEach(function (m) { setText(m, COPY.failure); });
  }

  function fillHidden(form) {
    ["gclid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach(function (key) {
      var v = params.get(key);
      var input = form.querySelector('input[name="' + key + '"]');
      if (v && input && !input.value) { input.value = v; input.dispatchEvent(new Event("change", { bubbles: true })); }
    });
  }

  var started = {};
  function mount(target) {
    var container = document.getElementById(target);
    if (!container || !window.hbspt) return;
    container.innerHTML = "";
    var observer = new MutationObserver(function () {
      var form = container.querySelector("form");
      if (form) localise(form);
      setText(container.querySelector(".submitted-message"), COPY.success);
    });
    observer.observe(container, { childList: true, subtree: true });
    window.hbspt.forms.create({
      portalId: HUBSPOT.portalId, formId: HUBSPOT.formId, region: HUBSPOT.region,
      target: "#" + target, locale: "ar",
      translations: { ar: { required: COPY.required, invalidEmail: COPY.email, invalidNumber: COPY.phone, submitText: COPY.submit } },
      onFormReady: function ($form) {
        var form = $form && $form.jquery ? $form[0] : $form;
        if (!form) return;
        addPicker(form);
        localise(form);
        fillHidden(form);
        form.addEventListener("focusin", function () {
          if (started[target]) return;
          started[target] = true;
          window.dataLayer.push({ event: "form_start", form_location: target, lp: LP, ad_group: ag || "" });
        });
      },
      onBeforeFormSubmit: function ($form) {
        var form = $form && $form.jquery ? $form[0] : $form;
        var sel = form && form.querySelector("select.svc-select");
        if (form && sel && sel.value) setHidden(form, sel.value);
      },
      onFormSubmitted: function ($form) {
        var form = $form && $form.jquery ? $form[0] : $form;
        var sel = form && form.querySelector ? form.querySelector("select.svc-select") : null;
        window.dataLayer.push({ event: "form_submit", form_location: target, hubspot_form_id: HUBSPOT.formId, service: sel ? sel.value : (preselect || ""), lp: LP, ad_group: ag || "" });
      }
    });
  }

  function fail() {
    document.querySelectorAll("[data-hubspot-form]").forEach(function (c) {
      c.innerHTML = '<p role="alert" class="form-loading">' + COPY.failure + "</p>";
    });
  }

  var s = document.createElement("script");
  s.src = "https://js.hsforms.net/forms/embed/v2.js";
  s.charset = "utf-8";
  s.async = true;
  s.onload = function () {
    document.querySelectorAll("[data-hubspot-form]").forEach(function (c) { mount(c.id); });
  };
  s.onerror = fail;
  document.body.appendChild(s);
})();
