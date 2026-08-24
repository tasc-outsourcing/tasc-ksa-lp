import { Check } from "lucide-react";
import teamImage from "../../assets/9cff85db04090540342d0112773706cbba3d5dce.png";

const items = [
  {
    id: "clients",
    title: <>موثوقون لدى أكثر من <bdi dir="ltr">675</bdi> عميلًا</>,
    description: "من الشركات الناشئة التي تؤسس فريقها المالي الأول، إلى المجموعات القائمة في التجارة الإلكترونية والخدمات المهنية والمقاولات والتجارة والضيافة والرعاية الصحية.",
  },
  {
    id: "experience",
    title: <>أكثر من <bdi dir="ltr">19</bdi> عامًا في دول الخليج</>,
    description: "واكبنا تطبيق ضريبة القيمة المضافة، ومتطلبات الفوترة الإلكترونية، والتطور المستمر في إجراءات الهيئة. يدير حسابك مختصون يفهمون كيف تغيرت المتطلبات وما الذي يعنيه ذلك لعملك.",
  },
  {
    id: "offices",
    title: "ثلاثة مكاتب في المملكة",
    description: "لدينا مكتبان في الرياض، أحدهما في حي الملك عبدالعزيز والآخر في مركز الملك عبدالله المالي، إضافة إلى مكتب في الخبر. ندير الامتثال من داخل المملكة عبر فريق يعمل ميدانيًا في السعودية، وليس عبر خدمة جرى تكييفها من دولة أخرى. ولدينا اختصاص واضح في الزكاة والضرائب والفوترة الإلكترونية والمعايير المحاسبية المعتمدة.",
  },
  {
    id: "engagement",
    title: "طريقتان للتعاقد",
    description: <>باقة شهرية متكاملة تبدأ من <bdi dir="ltr">4,999</bdi> ريال سعودي، أو خدمات ضريبية حسب كل إقرار تبدأ من <bdi dir="ltr">1,500</bdi> ريال سعودي. اختر النموذج الأنسب لمرحلة شركتك.</>,
  },
  {
    id: "partner",
    title: "شريك واحد لجميع احتياجات شركتك",
    description: "تبقى التزاماتك الضريبية مرتبطة بالرواتب والتوظيف والعلاقات الحكومية. جهة واحدة، فاتورة واحدة، ومن دون تنسيق مرهق بين عدة مزودين.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-[#f8fafc] px-6 py-20 md:px-16">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h2 className="gradient-heading text-[27px] font-bold leading-[1.35] tracking-normal md:text-[37px]">
            لماذا تختار تاسك لخدمات الشركات؟
          </h2>
          <p className="mt-5 text-[16px] leading-[1.75] text-[#4a5568]">
            تعمل تاسك في دول الخليج منذ أكثر من <bdi dir="ltr">19</bdi> عامًا. ندير متطلبات الامتثال للشركات التي تفضل عدم إنشاء إدارة مالية داخلية. ولأننا نتولى أيضًا الرواتب والتوظيف والعلاقات الحكومية، تبقى العمليات مترابطة ولا تضيع المسؤوليات بين مزودي الخدمات.
          </p>
          <ul className="mt-7 space-y-5">
            {items.map((item) => (
              <li key={item.id} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#00bfff] to-[#56db46] text-white">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[19px] font-semibold leading-[1.4] text-[#005f83]">{item.title}</h3>
                  <p className="mt-1 text-[15px] leading-[1.75] text-[#4a5568]">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-[520px] pb-10 sm:ps-8">
          <div className="overflow-hidden rounded-[20px] border border-[#d9ebf3] bg-white shadow-[0_16px_40px_rgba(0,95,131,0.14)]">
            <img src={teamImage} alt="متخصصون ماليون يراجعون بيانات الأعمال" className="aspect-[4/5] w-full object-cover object-center" />
          </div>
          <div className="absolute bottom-0 start-0 rounded-[16px] border border-white/20 bg-[#005f83] px-6 py-5 text-white shadow-xl">
            <strong className="block text-[25px] leading-[1.25]">أكثر من <bdi dir="ltr">19</bdi> عامًا</strong>
            <span className="mt-2 block text-[14px] leading-[1.5] text-white/80">من الخبرة في دول الخليج</span>
          </div>
        </div>
      </div>
    </section>
  );
}
