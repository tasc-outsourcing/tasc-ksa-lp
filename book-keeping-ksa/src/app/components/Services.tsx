import { Calculator, ChevronRight, Landmark, ReceiptText } from "lucide-react";

type ServicesProps = {
  onBookConsultation: (trigger: HTMLElement) => void;
};

const clusters = [
  {
    label: "Zakat & Tax",
    icon: Landmark,
    services: [
      {
        title: "ZATCA Registration",
        description: "We handle your registration for VAT and Zakat with ZATCA and track every deadline that follows it.",
      },
      {
        title: "Zakat & Income Tax Returns",
        description: "We calculate your Zakat base and taxable income, prepare the returns and manage submission to ZATCA — accurately, and ahead of the due date.",
      },
      {
        title: "Withholding Tax on Cross-Border Payments",
        description: "We identify which of your outbound payments attract WHT, at what rate, and handle the filings — the exposure most companies discover only during an audit.",
      },
    ],
  },
  {
    label: "Accounting",
    icon: Calculator,
    services: [
      {
        title: "Bookkeeping",
        description: "We record your day-to-day transactions, categorise expenses, generate invoices and maintain the general ledger, so your books are current rather than reconstructed at year-end.",
      },
      {
        title: "Financial Reporting & MIS",
        description: "Monthly management information alongside your statutory reporting — profit and loss, balance sheet, cash flow and the operational numbers your decisions actually depend on.",
      },
      {
        title: "Audit-Ready Documentation",
        description: "We maintain your records to SOCPA standards with SOCPA compliance tracking throughout the year, so a ZATCA audit or a statutory audit finds documentation rather than gaps.",
      },
      {
        title: "Accounting Setup & Software",
        description: "We implement your cloud accounting system end to end, including chart of accounts and the software subscription itself — included in the bundled service.",
      },
    ],
  },
  {
    label: "VAT & E-Invoicing",
    icon: ReceiptText,
    services: [
      {
        title: "VAT Registration",
        description: "We complete your VAT registration with ZATCA from start to finish, at 15% and against the SAR 375,000 threshold.",
      },
      {
        title: "VAT Return Filing",
        description: "We prepare and submit your monthly or quarterly returns, with input and output VAT reconciled before every submission — and reconciled alongside Zakat, not in isolation from it.",
      },
      {
        title: "FATOORAH Phase 2 Integration",
        description: "E-invoicing is mandatory and integration failures carry penalties up to SAR 50,000. We handle the setup, the integration and the ongoing compliance.",
      },
    ],
  },
];

export function Services({ onBookConsultation }: ServicesProps) {
  return (
    <section className="bg-white px-6 py-20 md:px-16" id="services">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-[65ch]">
          <h2 className="gradient-heading text-[32px] font-semibold leading-[1.15] tracking-[-1.3px] md:text-[42px]">
            Accounting, Zakat, tax and e-invoicing — all under one roof
          </h2>
          <p className="mt-5 text-[15px] leading-[1.75] text-[#4a5568]">
            ZATCA registration, VAT and Zakat returns, withholding tax on cross-border payments, FATOORAH Phase 2 integration and the books underneath all of it. We cover the full compliance cycle so nothing sits half-finished between vendors.
          </p>
          <p className="mt-3 text-[15px] leading-[1.75] text-[#4a5568]">
            ZATCA enforcement is now data-driven and real-time, and penalties begin from the first missed deadline. We work with SMEs and MSMEs across the Kingdom, startups scaling their finance function, foreign companies entering Saudi Arabia, and businesses with no in-house finance team.
          </p>
        </div>

        <div className="mt-12 border-t border-[#d9ebf3]">
          {clusters.map((cluster) => {
            const Icon = cluster.icon;
            return (
              <article key={cluster.label} className="grid gap-8 border-b border-[#d9ebf3] py-10 md:grid-cols-[240px_1fr] md:gap-12">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-[12px] border border-[#bfe5f7] bg-[#e7f6ff]">
                    <Icon className="h-6 w-6 text-[#005f83]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-[22px] font-semibold leading-[1.25]">
                    <span className="block text-[#00a9e6]">{cluster.label}</span>
                    <span className="block text-[#005f83]">Services</span>
                  </h3>
                </div>
                <div>
                  {cluster.services.map((service, index) => (
                    <div key={service.title} className={`grid grid-cols-[1fr_auto] items-center gap-5 py-5 ${index === 0 ? "pt-0" : "border-t border-[#e2e8f0]"}`}>
                      <div>
                        <h4 className="text-[16px] font-semibold text-[#005f83]">{service.title}</h4>
                        <p className="mt-1.5 text-[14px] leading-[1.7] text-[#4a5568]">{service.description}</p>
                      </div>
                      <button
                        type="button"
                        onClick={(event) => onBookConsultation(event.currentTarget)}
                        aria-label={`Book a consultation about ${service.title}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c8e6f0] text-[#005f83] transition-colors hover:border-[#00bfff] hover:bg-[#e7f6ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFE102]"
                      >
                        <ChevronRight className="h-5 w-5" aria-hidden="true" />
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
