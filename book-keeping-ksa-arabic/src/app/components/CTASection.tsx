import { CalendarDays, Mail } from "lucide-react";
import riyadhSkyline from "../../assets/78c15ce9629f35ed37e3669e2c484444ad334ffa.png";
import { CONTACT } from "../config";

type CTASectionProps = {
  onBookConsultation: (trigger: HTMLElement) => void;
};

const cardClass =
  "flex items-center gap-4 rounded-[18px] border border-white/20 bg-white p-5 text-start text-[#005f83] shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFE102]";

export function CTASection({ onBookConsultation }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:px-16" id="contact">
      <img
        src={riyadhSkyline}
        alt="أفق مدينة الرياض وقت الغروب"
        className="absolute inset-0 h-full w-full scale-125 object-cover object-[75%_55%]"
      />
      <div className="absolute inset-0 bg-[#003f59]/92" />
      <div className="relative mx-auto max-w-[1100px] text-center text-white">
        <h2 className="text-[27px] font-bold leading-[1.35] tracking-normal md:text-[37px]">
          لا تنتظر إشعار الغرامة
        </h2>
        <p className="mx-auto mt-4 max-w-[900px] text-[15px] leading-[1.75] text-white/90 md:text-[16px]">
          تبلغ غرامة عدم التسجيل في ضريبة القيمة المضافة خلال المدة النظامية <strong><bdi dir="ltr">10,000</bdi> ريال سعودي</strong>. وتتراوح غرامة عدم تقديم الإقرار خلال المدة النظامية بين <strong><bdi dir="ltr">5%</bdi> و<bdi dir="ltr">25%</bdi></strong> من قيمة الضريبة التي كان يجب الإقرار عنها، مع غرامة قدرها <strong><bdi dir="ltr">5%</bdi></strong> عن كل شهر أو جزء منه عند التأخر في السداد. كما تتدرج غرامات مخالفات الفوترة الإلكترونية بحسب نوع المخالفة وتكرارها. وحتى الإقرار الصفري يظل إقرارًا إلزاميًا. احجز مراجعة امتثال مجانية واعرف وضع منشأتك.
        </p>
        <div className="mx-auto mt-8 grid max-w-[720px] gap-4 md:grid-cols-2">
          <button type="button" onClick={(event) => onBookConsultation(event.currentTarget)} className={cardClass}>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#e7f6ff]">
              <CalendarDays className="h-5 w-5" aria-hidden="true" />
            </span>
            <span><strong className="block text-[14px]">احجز استشارتك المجانية</strong><span className="text-[15px]">اجتماع عبر الإنترنت</span></span>
          </button>
          <a href={`mailto:${CONTACT.email}`} className={cardClass}>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#e7f6ff]">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </span>
            <span><strong className="block text-[14px]">راسلنا عبر البريد الإلكتروني</strong><span className="ltr text-[15px]" dir="ltr">{CONTACT.email}</span></span>
          </a>
        </div>
      </div>
    </section>
  );
}
