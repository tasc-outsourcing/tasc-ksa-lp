import React from "react";

export function UseCasesSection() {
  const [selectedRole, setSelectedRole] = React.useState(0);

  const roles = [
    {
      role: "General Counsel & Legal Teams",
      challenge: "Legal teams translate 200+ contracts quarterly for bilingual board reviews. Generic AI tools miss critical legal nuances and create formatting disasters in complex documents.",
      solution: "97-98% accuracy on Arabic legal terminology",
      documents: ["Commercial Contracts", "NDAs", "Regulatory Filings", "Board Resolutions"],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      role: "HR Directors & People Operations",
      challenge: "Employee handbooks and offer letters must be identical in Arabic and English. Translation errors create HR liability, compliance issues, and employee confusion.",
      solution: "Preserves formatting in complex HR documents",
      documents: ["Employment Contracts", "Policy Handbooks", "NOCs", "Offer Letters"],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      role: "Compliance & Risk Officers",
      challenge: "Regulators require bilingual compliance documentation with full audit trails. Public AI tools train on sensitive data and lack the governance controls enterprises demand.",
      solution: "Enterprise security with full audit logs",
      documents: ["Compliance Policies", "Audit Reports", "Risk Assessments", "Regulatory Submissions"],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      role: "Marketing & Communications Teams",
      challenge: "Marketing teams need bilingual campaigns, press releases, and social content that maintains brand voice. Public translation tools produce awkward Arabic that damages brand credibility in local markets.",
      solution: "Brand-consistent Arabic that resonates locally",
      documents: ["Press Releases", "Marketing Campaigns", "Social Media Content", "Brand Guidelines"],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    }
  ];

  return (
    <section id="use-cases" className="py-32 px-8 lg:px-16 bg-slate-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[52px] font-bold text-[#005f83] mb-6 font-['Poppins',sans-serif] leading-tight">
            Built for Enterprise Leaders Who Can't<br />
            <span className="text-[#ffe102]">Afford Translation Risks</span>
          </h2>
          <p className="text-[20px] text-slate-600 max-w-3xl mx-auto font-['Poppins',sans-serif] mb-8">
            See which roles across your organization benefit most from AmaanText AI
          </p>
          
          {/* Role Pills */}
          <div className="flex justify-center gap-3 max-w-full mx-auto overflow-x-auto pb-2">
            {[
              "General Counsel & Legal Teams",
              "HR Directors & People Operations",
              "Compliance & Risk Officers",
              "Marketing & Communications Teams"
            ].map((role, idx) => (
              <div
                key={idx}
                className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
                  idx === selectedRole
                    ? "bg-[#005f83] text-white shadow-lg"
                    : "bg-white text-slate-600 border border-slate-300 hover:border-[#005f83] hover:text-[#005f83]"
                }`}
                onClick={() => setSelectedRole(idx)}
              >
                {role}
              </div>
            ))}
          </div>
        </div>

        {/* Role Cards */}
        <div className="max-w-4xl mx-auto mb-16">
          {/* Only show the selected role card */}
          {(() => {
            const item = roles[selectedRole];
            return (
              <div className="group relative bg-white rounded-[24px] p-8 border-2 border-slate-200 shadow-lg transition-all duration-300">
                {/* Top Section - Icon & Role */}
                <div className="flex gap-6 mb-6 items-center">
                  {/* Icon Circle */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-[#ffe102] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative w-20 h-20 rounded-full bg-[#005f83] flex items-center justify-center text-white shadow-lg">
                      {item.icon}
                    </div>
                  </div>

                  {/* Role Title */}
                  <div className="flex-1">
                    <h3 className="text-[26px] font-bold text-[#005f83] font-['Poppins',sans-serif] leading-tight">
                      {item.role}
                    </h3>
                  </div>

                  {/* Badge */}
                  <div className="flex-shrink-0 h-fit px-4 py-2 bg-[#ffe102] rounded-full">
                    <svg className="w-6 h-6 text-[#005f83]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-[#005f83]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-[13px] font-bold text-[#005f83] uppercase tracking-wider">The Challenge</span>
                  </div>
                  <p className="text-[15px] text-slate-700 leading-relaxed italic font-['Poppins',sans-serif]">
                    "{item.challenge}"
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6 bg-[#005f83] rounded-[16px] p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#ffe102] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#005f83]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-white/70 uppercase tracking-wider mb-1">AmaanText AI Solution</div>
                      <div className="text-[15px] font-bold text-white font-['Poppins',sans-serif]">
                        {item.solution}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Documents */}
                <div>
                  <div className="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-3">Document Types</div>
                  <div className="flex flex-wrap gap-2">
                    {item.documents.map((doc, docIdx) => (
                      <div
                        key={docIdx}
                        className="px-3 py-1.5 bg-slate-100 rounded-full text-[12px] font-semibold text-slate-700 border border-slate-200 hover:bg-[#ffe102]/20 hover:border-[#ffe102] transition-colors"
                      >
                        {doc}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Bottom CTA Bar */}
        <div className="bg-[#005f83] rounded-[24px] p-10 text-center shadow-xl">
          <h3 className="text-[32px] font-bold text-white mb-4 font-['Poppins',sans-serif]">
            Does Your Team Handle These Documents?
          </h3>
          <p className="text-[18px] text-white/80 mb-8 max-w-3xl mx-auto">
            Run a private pilot with your actual contracts, policies, or presentations to see AmaanText AI in action.
          </p>
          <button className="px-10 py-5 rounded-full bg-[#ffe102] text-[#005f83] text-[18px] font-bold hover:shadow-[0_8px_40px_rgba(255,225,2,0.4)] hover:scale-105 transition-all inline-flex items-center gap-3">
            Request Your Private Pilot
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}