import { CalendarDays, Mail } from "lucide-react";
import riyadhSkyline from "../../assets/78c15ce9629f35ed37e3669e2c484444ad334ffa.png";
import { CONTACT } from "../config";

type CTASectionProps = {
  onBookConsultation: (trigger: HTMLElement) => void;
};

const cardClass =
  "flex items-center gap-4 rounded-[18px] border border-white/20 bg-white p-5 text-left text-[#005f83] shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFE102]";

export function CTASection({ onBookConsultation }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:px-16" id="contact">
      <img
        src={riyadhSkyline}
        alt="Riyadh skyline at dusk"
        className="absolute inset-0 h-full w-full scale-125 object-cover object-[75%_55%]"
      />
      <div className="absolute inset-0 bg-[#003f59]/92" />
      <div className="relative mx-auto max-w-[1100px] text-center text-white">
        <h2 className="text-[32px] font-semibold leading-[1.15] tracking-[-1.3px] md:text-[42px]">
          Don't Wait for the Penalty Notice
        </h2>
        <p className="mx-auto mt-4 max-w-[900px] text-[14px] leading-[1.75] text-white/90 md:text-[16px]">
          Late VAT registration costs <strong>SAR 10,000</strong>. Late or missed returns run <strong>5–25%</strong> of the tax due, with <strong>5% a month</strong> on late payment. E-invoicing violations reach <strong>SAR 50,000</strong>. A nil return is still a mandatory return. Book a free compliance health check and find out where you stand.
        </p>
        <div className="mx-auto mt-8 grid max-w-[720px] gap-4 md:grid-cols-2">
          <a href={`mailto:${CONTACT.email}`} className={cardClass}>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#e7f6ff]">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </span>
            <span><strong className="block text-[14px]">Email us</strong><span className="text-[15px]">{CONTACT.email}</span></span>
          </a>
          <button type="button" onClick={(event) => onBookConsultation(event.currentTarget)} className={cardClass}>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#e7f6ff]">
              <CalendarDays className="h-5 w-5" aria-hidden="true" />
            </span>
            <span><strong className="block text-[14px]">Book Free Consultation</strong><span className="text-[15px]">Online Meeting</span></span>
          </button>
        </div>
      </div>
    </section>
  );
}
