import { ChevronLeft } from "lucide-react";
import riyadhSkyline from "../../assets/78c15ce9629f35ed37e3669e2c484444ad334ffa.png";
import { HubSpotForm } from "./HubSpotForm";

type HeroSectionProps = {
  onBookConsultation: (trigger: HTMLElement) => void;
};

const stats = [
  ["675+", "عميلًا"],
  ["19+", "عامًا من الخبرة في دول الخليج"],
  ["25+", "جائزة في القطاع"],
];

export function HeroSection({ onBookConsultation }: HeroSectionProps) {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-[#005f83]">
      <img
        src={riyadhSkyline}
        alt="أفق مدينة الرياض"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-bl from-[#005f83]/90 via-[#005f83]/75 to-[#003f59]/90" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center gap-10 px-6 pb-20 pt-32 md:px-16 lg:flex-row lg:items-center lg:gap-12 lg:pb-12 lg:pt-28 xl:gap-16">
        <div className="flex max-w-[700px] flex-1 flex-col items-start gap-5 text-start text-white">
          <p className="w-fit self-start rounded-full border border-white/30 bg-white/10 px-4 py-2 text-start text-[13px] font-semibold tracking-normal">
            الضرائب والمحاسبة | المملكة العربية السعودية
          </p>
          <h1 className="text-start text-[33px] font-bold leading-[1.3] tracking-normal md:text-[40px] xl:text-[49px]">
            فريق مالي متكامل لشركتك في السعودية ابتداءً من{" "}
            <span className="inline-block whitespace-nowrap">
              <span className="relative inline-block" dir="ltr">
                4,999
                <span className="absolute -bottom-1 inset-x-0 h-[5px] w-full rounded-full bg-[#FFE102]" aria-hidden="true" />
              </span>{" "}
              ريال شهريًا
            </span>
          </h1>
          <p className="max-w-[62ch] text-start text-[16px] leading-[1.75] text-white/90 md:text-[18px]">
            مسك الدفاتر والمحاسبة وضريبة القيمة المضافة والزكاة وضريبة الاستقطاع ومنظومة الفوترة الإلكترونية «فاتورة»، إضافة إلى نظامك المحاسبي، كلها ضمن رسوم شهرية واحدة. ويتولى الخدمة مختصون يعملون يوميًا ضمن الأنظمة السعودية.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={(event) => onBookConsultation(event.currentTarget)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00bfff] to-[#56db46] px-6 py-3.5 text-[14px] font-semibold text-white shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFE102]"
            >
              احجز استشارتك المجانية
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFE102]"
            >
              اطّلع على ما يشمله العرض
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <dl className="grid grid-cols-3 gap-4 border-t border-white/25 pt-5 sm:gap-7">
            {stats.map(([number, label]) => (
              <div key={label}>
                <dt className="mb-1 text-[27px] font-semibold leading-none sm:text-[34px]"><bdi dir="ltr">{number}</bdi></dt>
                <dd className="text-[12px] leading-[1.55] text-white/80 sm:text-[13px]">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="w-full max-w-[440px] rounded-[20px] border border-[#c8e6f0] bg-white p-6 shadow-2xl md:p-7">
          <h2 className="text-center text-[24px] font-bold leading-[1.4] tracking-normal text-[#005f83]">
            احجز استشارتك المجانية
          </h2>
          <p className="mt-2 text-center text-[13px] leading-[1.55] text-[#4a5568]">
            شاركنا بياناتك وسيتواصل معك فريقنا خلال يوم عمل واحد.
          </p>
          <HubSpotForm containerId="hubspot-form-hero" theme="dark" className="mt-4" />
        </div>
      </div>
    </section>
  );
}
