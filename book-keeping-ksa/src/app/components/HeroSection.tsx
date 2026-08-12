import { ChevronRight } from "lucide-react";
import riyadhSkyline from "../../assets/78c15ce9629f35ed37e3669e2c484444ad334ffa.png";
import { HubSpotForm } from "./HubSpotForm";

type HeroSectionProps = {
  onBookConsultation: (trigger: HTMLElement) => void;
};

const stats = [
  ["675+", "Clients served"],
  ["19+", "Years in the GCC"],
  ["25+", "Industry awards"],
];

export function HeroSection({ onBookConsultation }: HeroSectionProps) {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-[#005f83]">
      <img
        src={riyadhSkyline}
        alt="Riyadh skyline"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#005f83]/90 via-[#005f83]/75 to-[#003f59]/90" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center gap-10 px-6 pb-20 pt-32 md:px-16 lg:flex-row lg:items-center lg:gap-12 lg:pb-12 lg:pt-28 xl:gap-16">
        <div className="flex max-w-[700px] flex-1 flex-col gap-5 text-white">
          <p className="w-fit rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[12px] font-semibold tracking-[0.3px]">
            Tax &amp; Accounting · Saudi Arabia
          </p>
          <h1 className="text-[34px] font-semibold leading-[1.08] tracking-[-1.6px] md:text-[48px] xl:text-[54px]">
            Your full Saudi finance function from{" "}
            <span className="relative inline-block whitespace-nowrap">
              SAR 4,999
              <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full bg-[#FFE102]" aria-hidden="true" />
            </span>{" "}
            a month
          </h1>
          <p className="max-w-[65ch] text-[15px] leading-[1.7] text-white/90 md:text-[16px]">
            Bookkeeping, accounting, VAT, Zakat, withholding tax, FATOORAH e-invoicing and your accounting software — bundled into one monthly fee, delivered by specialists who work inside the Saudi regulatory landscape every day.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={(event) => onBookConsultation(event.currentTarget)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00bfff] to-[#56db46] px-6 py-3.5 text-[14px] font-semibold text-white shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFE102]"
            >
              Book free consultation
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFE102]"
            >
              See what's included
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <dl className="grid grid-cols-3 gap-4 border-t border-white/25 pt-5 sm:gap-7">
            {stats.map(([number, label]) => (
              <div key={label}>
                <dt className="mb-1 text-[27px] font-semibold leading-none sm:text-[34px]">{number}</dt>
                <dd className="text-[11px] leading-[1.35] text-white/75 sm:text-[12px]">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="w-full max-w-[440px] rounded-[20px] border border-[#c8e6f0] bg-white p-6 shadow-2xl md:p-7">
          <h2 className="text-center text-[23px] font-semibold leading-[1.3] tracking-[-0.8px] text-[#005f83]">
            Book your free consultation
          </h2>
          <p className="mt-2 text-center text-[13px] leading-[1.55] text-[#4a5568]">
            Share your details and our team will be in touch within one working day.
          </p>
          <HubSpotForm containerId="hubspot-form-hero" theme="dark" className="mt-4" />
        </div>
      </div>
    </section>
  );
}
