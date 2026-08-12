import { Check } from "lucide-react";

const benefits = [
  {
    title: "Accurate, Timely Bookkeeping",
    description: "Your records are maintained through the year, not assembled at year-end. Clean books mean filing is routine and your documentation holds up when ZATCA asks for it.",
  },
  {
    title: "On-Time Registration & Filing",
    description: "We track every deadline that applies to your entity — VAT, Zakat, WHT — and prepare each submission well ahead of it. Nearly every penalty in the Saudi schedule is a deadline penalty.",
  },
  {
    title: "FATOORAH Handled Properly",
    description: "Phase 2 integration is mandatory and the penalties reach SAR 50,000. We handle integration, validation and ongoing compliance rather than treating e-invoicing as a one-off IT project.",
  },
  {
    title: "SOCPA and IFRS Aligned",
    description: "Records prepared to SOCPA standards and International Financial Reporting Standards. That matters when you raise finance, onboard investors, or go through statutory audit.",
  },
  {
    title: "VAT Reconciled Alongside Zakat",
    description: "Most providers handle these separately. Treated in isolation, they produce inconsistencies that surface during audit. We reconcile them together.",
  },
  {
    title: "One Partner, One Invoice",
    description: "Accounting sits alongside your payroll, hiring and government relations. Nothing falls between vendors, because there is only one vendor.",
  },
];

export function TeamBenefits() {
  return (
    <section className="bg-white px-6 py-20 md:px-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[850px] text-center">
          <h2 className="gradient-heading text-[32px] font-semibold leading-[1.15] tracking-[-1.3px] md:text-[42px]">
            Why work with TASC Corporate Services's accounting team?
          </h2>
          <p className="mt-5 text-[15px] leading-[1.75] text-[#4a5568]">
            Saudi compliance takes more than a bookkeeper. It takes a provider who understands how ZATCA, Zakat, VAT and e-invoicing connect — and how all four connect to the rest of your business. Here is what you get with our team:
          </p>
        </div>
        <div className="mt-11 grid gap-x-8 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="flex gap-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#00bfff] to-[#56db46] text-white">
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-[16px] font-semibold text-[#005f83]">{benefit.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-[#4a5568]">{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
