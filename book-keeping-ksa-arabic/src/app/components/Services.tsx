import { Calculator, ChevronLeft, Landmark, ReceiptText } from "lucide-react";

type ServicesProps = {
  onBookConsultation: (trigger: HTMLElement) => void;
};

const clusters = [
  {
    label: "خدمات الزكاة والضرائب",
    icon: Landmark,
    services: [
      {
        title: "التسجيل لدى هيئة الزكاة والضريبة والجمارك",
        description: "نتولى تسجيل منشأتك في ضريبة القيمة المضافة والزكاة لدى الهيئة، ونتابع كل موعد نظامي يترتب على التسجيل.",
        buttonLabel: "احجز استشارة بشأن التسجيل لدى هيئة الزكاة والضريبة والجمارك",
      },
      {
        title: "إقرارات الزكاة وضريبة الدخل",
        description: "نحسب الوعاء الزكوي والدخل الخاضع للضريبة، ونعد الإقرارات ونتولى تقديمها إلى الهيئة بدقة وقبل الموعد النظامي.",
        buttonLabel: "احجز استشارة بشأن إقرارات الزكاة وضريبة الدخل",
      },
      {
        title: "ضريبة الاستقطاع على المدفوعات عبر الحدود",
        description: "نحدد المدفوعات الخارجية الخاضعة لضريبة الاستقطاع والنسبة المطبقة عليها، ثم نتولى إعداد الإقرارات وتقديمها. وهي من المخاطر التي لا تكتشفها بعض الشركات إلا عند الفحص.",
        buttonLabel: "احجز استشارة بشأن ضريبة الاستقطاع",
      },
    ],
  },
  {
    label: "الخدمات المحاسبية",
    icon: Calculator,
    services: [
      {
        title: "مسك الدفاتر",
        description: "نسجل معاملاتك اليومية، ونصنف المصروفات، ونصدر الفواتير، ونحدّث دفتر الأستاذ العام، لتبقى سجلاتك جاهزة طوال العام بدلًا من إعادة بنائها عند نهاية السنة.",
        buttonLabel: "احجز استشارة بشأن مسك الدفاتر",
      },
      {
        title: "التقارير المالية والمعلومات الإدارية",
        description: "نقدم تقارير الإدارة الشهرية إلى جانب التقارير النظامية، بما يشمل قائمة الربح أو الخسارة، وقائمة المركز المالي، والتدفقات النقدية، والمؤشرات التشغيلية التي تعتمد عليها قراراتك.",
        buttonLabel: "احجز استشارة بشأن التقارير المالية والمعلومات الإدارية",
      },
      {
        title: "مستندات جاهزة للمراجعة",
        description: "نحافظ على سجلاتك ومستنداتك وفق المعايير المحاسبية المعتمدة في المملكة، ونتابع اكتمالها طوال العام، حتى تجد عمليات الفحص أو المراجعة مستندات واضحة لا فجوات.",
        buttonLabel: "احجز استشارة بشأن تجهيز المستندات للمراجعة",
      },
      {
        title: "إعداد النظام المحاسبي وبرامجه",
        description: "نقوم بتجهيز نظامك المحاسبي السحابي من البداية إلى النهاية، بما في ذلك دليل الحسابات واشتراك البرنامج نفسه ضمن باقة الخدمة.",
        buttonLabel: "احجز استشارة بشأن إعداد النظام المحاسبي",
      },
    ],
  },
  {
    label: "خدمات ضريبة القيمة المضافة والفوترة الإلكترونية",
    icon: ReceiptText,
    services: [
      {
        title: "التسجيل في ضريبة القيمة المضافة",
        description: <>نتولى تسجيل منشأتك لدى الهيئة من البداية إلى النهاية، وفق النسبة الأساسية البالغة <bdi dir="ltr">15%</bdi> وحد التسجيل الإلزامي البالغ <bdi dir="ltr">375,000</bdi> ريال سعودي.</>,
        buttonLabel: "احجز استشارة بشأن التسجيل في ضريبة القيمة المضافة",
      },
      {
        title: "إقرارات ضريبة القيمة المضافة",
        description: "نعد ونقدم إقراراتك الشهرية أو ربع السنوية، ونجري مطابقة ضريبة المدخلات والمخرجات قبل كل تقديم، بالتوازي مع الزكاة وليس بمعزل عنها.",
        buttonLabel: "احجز استشارة بشأن إقرارات ضريبة القيمة المضافة",
      },
      {
        title: "ربط المرحلة الثانية من الفوترة الإلكترونية",
        description: <>تنطبق متطلبات المرحلة الثانية على المنشآت المستهدفة بحسب الموجات التي تعلنها الهيئة. وقد تتدرج غرامات بعض المخالفات عند تكرارها حتى <bdi dir="ltr">50,000</bdi> ريال سعودي. نتولى الإعداد والربط والمتابعة المستمرة للامتثال.</>,
        buttonLabel: "احجز استشارة بشأن ربط المرحلة الثانية من الفوترة الإلكترونية",
      },
    ],
  },
];

export function Services({ onBookConsultation }: ServicesProps) {
  return (
    <section className="bg-white px-6 py-20 md:px-16" id="services">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-[65ch]">
          <h2 className="gradient-heading text-[27px] font-bold leading-[1.35] tracking-normal md:text-[37px]">
            المحاسبة والزكاة والضرائب والفوترة الإلكترونية تحت سقف واحد
          </h2>
          <p className="mt-5 text-[15px] leading-[1.75] text-[#4a5568]">
            من التسجيل لدى هيئة الزكاة والضريبة والجمارك «زاتكا»، إلى إقرارات ضريبة القيمة المضافة والزكاة، وضريبة الاستقطاع على المدفوعات عبر الحدود، وربط المرحلة الثانية من الفوترة الإلكترونية، وصولًا إلى السجلات المحاسبية التي تقوم عليها كل هذه الالتزامات. ندير دورة الامتثال كاملة، حتى لا تبقى أي مهمة معلقة بين أكثر من مزود.
          </p>
          <p className="mt-3 text-[15px] leading-[1.75] text-[#4a5568]">
            تزداد إجراءات الرقابة لدى الهيئة اعتمادًا على البيانات الفورية، وقد تنشأ الغرامات بمجرد تجاوز الموعد النظامي. نعمل مع المنشآت المتناهية الصغر والصغيرة والمتوسطة في مختلف أنحاء المملكة، والشركات الناشئة التي تعمل على تطوير وظائفها المالية، والشركات الأجنبية الداخلة إلى السوق السعودي، والمنشآت التي لا تملك فريقًا ماليًا داخليًا.
          </p>
        </div>

        <div className="mt-12 border-t border-[#d9ebf3]">
          {clusters.map((cluster) => {
            const Icon = cluster.icon;
            return (
              <article key={cluster.label} className="grid gap-8 border-b border-[#d9ebf3] py-10 md:grid-cols-[minmax(220px,280px)_1fr] md:gap-12">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-[12px] border border-[#bfe5f7] bg-[#e7f6ff]">
                    <Icon className="h-6 w-6 text-[#005f83]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-[22px] font-semibold leading-[1.25]">
                    <span className="block text-[#00a9e6]">{cluster.label}</span>
                  </h3>
                </div>
                <div>
                  {cluster.services.map((service, index) => (
                    <div key={service.title} className={`grid grid-cols-[1fr_auto] items-center gap-5 py-5 ${index === 0 ? "pt-0" : "border-t border-[#e2e8f0]"}`}>
                      <div>
                        <h4 className="text-[19px] font-semibold leading-[1.4] text-[#005f83]">{service.title}</h4>
                        <p className="mt-1.5 text-[15px] leading-[1.75] text-[#4a5568]">{service.description}</p>
                      </div>
                      <button
                        type="button"
                        onClick={(event) => onBookConsultation(event.currentTarget)}
                        aria-label={service.buttonLabel}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c8e6f0] text-[#005f83] transition-colors hover:border-[#00bfff] hover:bg-[#e7f6ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFE102]"
                      >
                        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
