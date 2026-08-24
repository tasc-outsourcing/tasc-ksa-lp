import { Check } from "lucide-react";

const benefits = [
  {
    title: "سجلات محاسبية دقيقة ومحدثة",
    description: "نحافظ على سجلاتك طوال العام بدلًا من جمعها عند نهاية السنة. السجلات المنظمة تجعل تقديم الإقرارات أكثر سلاسة، وتوفر المستندات المطلوبة عند طلبها من الهيئة.",
  },
  {
    title: "التسجيل وتقديم الإقرارات في مواعيدها النظامية",
    description: "نتابع جميع المواعيد النظامية المرتبطة بمنشأتك، بما يشمل ضريبة القيمة المضافة والزكاة وضريبة الاستقطاع، ونجهز كل معاملة قبل موعدها بوقت كافٍ. نسبة كبيرة من الغرامات ترتبط بتجاوز المواعيد.",
  },
  {
    title: "إدارة متكاملة للفوترة الإلكترونية",
    description: "تطبق متطلبات المرحلة الثانية على المنشآت المستهدفة على مراحل. نتولى الربط والتحقق والمتابعة المستمرة، بدلًا من التعامل مع الفوترة الإلكترونية كمشروع تقني ينتهي بعد الإعداد.",
  },
  {
    title: "الالتزام بالمعايير المعتمدة في المملكة",
    description: "نعد السجلات وفق المعايير المحاسبية المعتمدة في المملكة والمعايير الدولية للتقرير المالي التي تنطبق على منشأتك. وهذا مهم عند الحصول على تمويل أو دخول مستثمرين أو الخضوع للمراجعة النظامية.",
  },
  {
    title: "مطابقة ضريبة القيمة المضافة مع الزكاة",
    description: "يتعامل كثير من المزودين معهما كلًا على حدة، لكن عزلهما قد يسبب فروقات تظهر أثناء الفحص. نحن نراجعهما معًا.",
  },
  {
    title: "شريك واحد وفاتورة واحدة",
    description: "تقع المحاسبة بجانب إدارة الرواتب والتوظيف والعلاقات الحكومية. لا تضيع المسؤولية بين أكثر من مزود لأنك تتعامل مع جهة واحدة.",
  },
];

export function TeamBenefits() {
  return (
    <section className="bg-white px-6 py-20 md:px-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[850px] text-center">
          <h2 className="gradient-heading text-[27px] font-bold leading-[1.35] tracking-normal md:text-[37px]">
            لماذا تختار فريق المحاسبة لدى تاسك لخدمات الشركات؟
          </h2>
          <p className="mt-5 text-[16px] leading-[1.75] text-[#4a5568]">
            الامتثال في السعودية يتطلب أكثر من مجرد مسك الدفاتر. فهو يحتاج إلى شريك يفهم العلاقة بين الزكاة وضريبة القيمة المضافة والفوترة الإلكترونية، وكيف ترتبط جميعها ببقية عمليات شركتك. مع فريقنا تحصل على:
          </p>
        </div>
        <div className="mt-11 grid gap-x-8 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="flex gap-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#00bfff] to-[#56db46] text-white">
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-[19px] font-semibold leading-[1.4] text-[#005f83]">{benefit.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.75] text-[#4a5568]">{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
