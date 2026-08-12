import { Check } from "lucide-react";
import teamImage from "../../assets/9cff85db04090540342d0112773706cbba3d5dce.png";

const items = [
  {
    title: "Trusted by 675+ Clients",
    description: "From startups scaling their first finance function to established groups across e-commerce, professional services, contracting, trading, hospitality and healthcare.",
  },
  {
    title: "19+ Years in the GCC",
    description: "We have worked through VAT introduction, e-invoicing mandates and successive ZATCA enforcement shifts. Your account is handled by people who have seen the rules change.",
  },
  {
    title: "Three Offices Across the Kingdom",
    description: "Riyadh in King Abdulaziz District, Riyadh in KAFD, and Al Khobar. Saudi compliance is handled from the Kingdom by people on the ground, not from a UAE desk with the service adapted at the border. ZATCA, Zakat, FATOORAH and SOCPA are a dedicated function for us.",
  },
  {
    title: "Two Ways to Engage",
    description: "A bundled monthly service from SAR 4,999 covering everything, or per-filing tax services from SAR 1,500 if you only need returns handled. You pick the model that fits your stage.",
  },
  {
    title: "One Partner Across Your Whole Setup",
    description: "Your tax position stays connected to your payroll, your hiring and your government relations. One relationship, one invoice, no handovers between vendors.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-[#f8fafc] px-6 py-20 md:px-16">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h2 className="gradient-heading text-[32px] font-semibold leading-[1.15] tracking-[-1.3px] md:text-[42px]">
            Why Choose TASC Corporate Services?
          </h2>
          <p className="mt-5 text-[15px] leading-[1.75] text-[#4a5568]">
            TASC has operated across the GCC for over 19 years. We handle compliance for companies that would rather not build a finance department — and because we also handle their payroll, hiring and government relations, nothing falls between providers.
          </p>
          <ul className="mt-7 space-y-5">
            {items.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#00bfff] to-[#56db46] text-white">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold text-[#005f83]">{item.title}</h3>
                  <p className="mt-1 text-[14px] leading-[1.65] text-[#4a5568]">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-[520px] pb-10 sm:pl-8">
          <div className="overflow-hidden rounded-[20px] border border-[#d9ebf3] bg-white shadow-[0_16px_40px_rgba(0,95,131,0.14)]">
            <img src={teamImage} alt="Finance professionals reviewing business data" className="aspect-[4/5] w-full object-cover object-center" />
          </div>
          <div className="absolute bottom-0 left-0 rounded-[16px] border border-white/20 bg-[#005f83] px-6 py-5 text-white shadow-xl">
            <strong className="block text-[28px] leading-none">19+ Years</strong>
            <span className="mt-2 block text-[13px] leading-[1.4] text-white/80">Across the GCC</span>
          </div>
        </div>
      </div>
    </section>
  );
}
