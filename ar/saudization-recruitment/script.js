(function () {
  "use strict";

  var HUBSPOT = { portalId: "20309062", formId: "bfee5ab8-ab83-4cbf-b2b2-3231e1ea546c", region: "na1" }; // TASC KSA Saudization - Website
  window.dataLayer = window.dataLayer || [];
  var params = new URLSearchParams(window.location.search);

  /* ---------- Ad group message match (?ag=1..5) ---------- */
  var VARIANTS = {
    "2": { h1: "حلول السعودة للمنشآت: توظيف سعوديين يُحتسب في نطاقات" },
    "3": { h1: "ارفع نسبة السعودة ونطاق منشأتك بتوظيف سعوديين" },
    "4": { h1: "توطين المهن المشمولة بقرارات الوزارة بكفاءات سعودية" },
    "5": { h1: "شريك موارد بشرية للتوطين وتوظيف السعوديين" }
  };
  var ag = params.get("ag");
  if (ag && VARIANTS[ag]) {
    var h1 = document.querySelector("[data-variant-h1]");
    if (h1) h1.textContent = VARIANTS[ag].h1;
  }

  /* ---------- Click tracking ---------- */
  document.addEventListener("click", function (e) {
    var el = e.target.closest ? e.target.closest("[data-track]") : null;
    if (el) window.dataLayer.push({ event: el.getAttribute("data-track"), lp: "ar-saudization-recruitment", ad_group: ag || "" });
  });

  /* ---------- HubSpot form, localised to Arabic ---------- */
  var LABELS = {
    firstname: "الاسم الأول", lastname: "اسم العائلة", email: "البريد الإلكتروني للعمل",
    phone: "رقم الجوال", mobilephone: "رقم الجوال", company: "اسم المنشأة", jobtitle: "المسمى الوظيفي",
    city: "المدينة", country: "الدولة", message: "كيف يمكننا مساعدتك؟", business_sector: "قطاع الأعمال",
    industry: "القطاع", numemployees: "عدد الموظفين", number_of_employees: "عدد الموظفين",
    how_many_saudi_nationals_do_you_need_to_hire_: "عدد الموظفين السعوديين المطلوبين"
  };
  var PLACEHOLDERS = {
    firstname: "الاسم الأول*", lastname: "اسم العائلة*", email: "البريد الإلكتروني للعمل*",
    phone: "رقم الجوال*", company: "اسم المنشأة*", jobtitle: "المسمى الوظيفي*",
    hiring_requirement_brief: "صف احتياجك باختصار: عدد الموظفين السعوديين، الأدوار، المدينة*"
  };
  var SELECT_PROMPTS = { business_sector: "قطاع الأعمال*", hiring_timeline: "متى تحتاج بدء التوظيف؟*" };
  var TIMELINE = {
    "Within 1 month": "خلال شهر", "Within 3 months": "خلال 3 أشهر",
    "Within 6 months": "خلال 6 أشهر", "After 6 month": "بعد 6 أشهر"
  };
  var SECTORS = {"Admin and Secretarial": "الإدارة والسكرتارية", "Advertising": "الإعلان", "Advertising and PR": "الإعلان والعلاقات العامة", "Aerospace": "الطيران والفضاء", "Aerospace & Defense": "الطيران والفضاء والدفاع", "Agriculture": "الزراعة", "Agriculture Fishing and Forestry": "الزراعة وصيد الأسماك والغابات", "Apparel": "الملابس", "Arts": "الفنون", "Automotive": "السيارات", "Banking": "الخدمات المصرفية", "Biotechnology": "التقنية الحيوية", "BPO & Call Centre and Customer Services": "تعهيد العمليات ومراكز الاتصال وخدمة العملاء", "Building & Construction": "البناء والإنشاءات", "Business Intelligence,Big Data & Analytics": "ذكاء الأعمال والبيانات الضخمة والتحليلات", "Business Service": "خدمات الأعمال", "Chemicals": "الكيماويات", "Commercial Public Services": "الخدمات التجارية والعامة", "Communications": "الاتصالات", "Community Services": "الخدمات المجتمعية", "Compliance & Financial Crime": "الامتثال والجرائم المالية", "Construction": "الإنشاءات", "Consultancy": "الخدمات الاستشارية", "Consulting": "الاستشارات", "Defense and Creative": "الدفاع والصناعات الإبداعية", "Digital": "القطاع الرقمي", "Distribution & Restaurants": "التوزيع والمطاعم", "Domestic Services": "الخدمات المنزلية", "E-Commerce": "التجارة الإلكترونية", "Education": "التعليم", "Education and Training": "التعليم والتدريب", "Electronics": "الإلكترونيات", "Energy": "الطاقة", "Engineering": "الهندسة", "Entertainment": "الترفيه", "Environmental": "البيئة", "ERP & CRM": "تخطيط موارد المؤسسات وإدارة علاقات العملاء", "Fashion & Footwear": "الأزياء والأحذية", "Finance": "التمويل", "Finance & Accounting": "التمويل والمحاسبة", "FinTech": "التقنية المالية", "FMCG": "السلع الاستهلاكية سريعة التداول", "Food & Beverage": "الأغذية والمشروبات", "Government": "الجهات الحكومية", "Graduates and Trainees": "الخريجون والمتدربون", "Health and Safety": "الصحة والسلامة", "Healthcare": "الرعاية الصحية", "Hospital and Catering": "المستشفيات وخدمات الإعاشة", "Hospitality": "الضيافة", "Human Resources and Personnel": "الموارد البشرية وشؤون الموظفين", "ICT": "تقنية المعلومات والاتصالات", "Industry & Agriculture": "الصناعة والزراعة", "Insurance": "التأمين", "IT": "تقنية المعلومات", "IT Infrastructure & Cyber Security": "البنية التحتية لتقنية المعلومات والأمن السيبراني", "Law & Insurance": "القانون والتأمين", "Legal": "الخدمات القانونية", "Leisure and Sport": "الترفيه والرياضة", "Logistics Distribution and Supply Chain": "الخدمات اللوجستية والتوزيع وسلاسل الإمداد", "Machinery": "الآلات", "Manufacturing": "التصنيع", "Manufacturing and Production": "التصنيع والإنتاج", "Marketing": "التسويق", "Media": "الإعلام", "Medical and Nursing": "الطب والتمريض", "Military": "القطاع العسكري", "Mining": "التعدين", "New Media and Internet": "الإعلام الجديد والإنترنت", "Not For Profit": "القطاع غير الربحي", "Not for Profit and Charities": "الجهات غير الربحية والجمعيات الخيرية", "Office Equipment": "المعدات المكتبية", "Oil and Gas": "النفط والغاز", "Other": "أخرى", "Others": "أخرى", "Pharmaceuticals": "الصناعات الدوائية", "Property and Housing": "العقارات والإسكان", "Public Relations and Communications": "العلاقات العامة والاتصالات", "Public Safety": "السلامة العامة", "Public Sector & Government": "القطاع العام والجهات الحكومية", "Publishing & Production": "النشر والإنتاج", "Purchasing and Procurement": "المشتريات والتوريد", "Real Estate & Property": "العقارات والممتلكات", "Recreation": "الأنشطة الترفيهية", "Recruitment Consultancy": "استشارات التوظيف", "Retail": "التجزئة", "Sales": "المبيعات", "Science and Research": "العلوم والبحوث", "Senior Appointments": "التعيينات القيادية", "Shipping": "الشحن", "Social care": "الرعاية الاجتماعية", "Software Engineering": "هندسة البرمجيات", "Supermarkets": "متاجر السوبرماركت", "Systems Integrator Telecoms": "تكامل الأنظمة والاتصالات", "Technology": "التقنية", "Telecommunications": "الاتصالات", "Telecoms & ICT": "الاتصالات وتقنية المعلومات", "Trade and Services": "التجارة والخدمات", "Transport and Rail": "النقل والسكك الحديدية", "Transportation": "النقل", "Transports": "خدمات النقل", "Travel & Tourism": "السفر والسياحة", "Utilities": "المرافق"};
  var COPY = {
    required: "هذا الحقل مطلوب.",
    email: "يرجى إدخال بريد إلكتروني صحيح للعمل.",
    phone: "يرجى إدخال رقم جوال صحيح.",
    submit: "احجز استشارة توطين",
    success: "شكراً لك. استلمنا طلبك وسيتواصل معك مختص توطين قريباً.",
    failure: "تعذر إرسال الطلب. يرجى المحاولة مرة أخرى أو الاتصال بنا على \u2066+966 11 216 6218\u2069.",
    select: "اختر"
  };

  function setText(el, value) { if (el && el.textContent !== value) el.textContent = value; }
  function setAttr(el, name, value) { if (el && el.getAttribute(name) !== value) el.setAttribute(name, value); }

  function localise(form) {
    setAttr(form, "lang", "ar");
    setAttr(form, "dir", "rtl");
    form.querySelectorAll(".hs-form-field").forEach(function (field) {
      var input = field.querySelector("input:not([type=hidden]), select, textarea");
      var label = field.querySelector("label > span:first-child");
      var name = input ? (input.getAttribute("name") || "") : "";
      if (LABELS[name] && label) setText(label, LABELS[name]);
      if (input && (input.type === "email" || input.type === "tel")) setAttr(input, "dir", "ltr");
      if (input && PLACEHOLDERS[name]) { setAttr(input, "placeholder", PLACEHOLDERS[name]); setAttr(input, "aria-label", PLACEHOLDERS[name]); }
      if (input && input.tagName === "SELECT") {
        var map = name === "business_sector" ? SECTORS : (name === "hiring_timeline" ? TIMELINE : null);
        Array.prototype.forEach.call(input.options, function (o) {
          if (!o.value) setText(o, SELECT_PROMPTS[name] || COPY.select);
          else if (map && map[o.value]) setText(o, map[o.value]);
        });
        if (SELECT_PROMPTS[name]) setAttr(input, "aria-label", SELECT_PROMPTS[name]);
      }
      field.querySelectorAll(".hs-error-msg").forEach(function (msg) {
        var copy = COPY.required;
        if (name === "email") copy = COPY.email;
        if (name === "phone" || name === "mobilephone") copy = COPY.phone;
        setText(msg, copy);
      });
    });
    var tel = form.querySelector('input[type="tel"][id^="phone-"]');
    if (tel) { setAttr(tel, "placeholder", PLACEHOLDERS.phone); setAttr(tel, "aria-label", PLACEHOLDERS.phone); setAttr(tel, "dir", "ltr"); }
    var phoneExt = form.querySelector('select[id^="phone_ext-"]');
    if (phoneExt) {
      setAttr(phoneExt, "aria-label", "رمز الدولة");
      var names = typeof Intl.DisplayNames === "function" ? new Intl.DisplayNames(["ar"], { type: "region" }) : null;
      Array.prototype.forEach.call(phoneExt.options, function (o) {
        if (!o.value || o.dataset.ar) return;
        o.dataset.ar = "1";
        var n = o.textContent;
        try { n = (names && names.of(o.value)) || n; } catch (err) { /* keep HubSpot label */ }
        o.textContent = o.value === "SA" ? "السعودية" : n;
      });
    }
    if (phoneExt && phoneExt.value !== "SA" && !phoneExt.dataset.saSet) {
      phoneExt.dataset.saSet = "1";
      phoneExt.value = "SA";
      phoneExt.dispatchEvent(new Event("change", { bubbles: true }));
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
        localise(form);
        fillHidden(form);
        form.addEventListener("focusin", function () {
          if (started[target]) return;
          started[target] = true;
          window.dataLayer.push({ event: "form_start", form_location: target, lp: "ar-saudization-recruitment", ad_group: ag || "" });
        });
      },
      onFormSubmitted: function () {
        window.dataLayer.push({ event: "form_submit", form_location: target, hubspot_form_id: HUBSPOT.formId, lp: "ar-saudization-recruitment", ad_group: ag || "" });
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
