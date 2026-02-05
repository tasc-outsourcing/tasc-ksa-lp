import React, { useEffect, useState } from "react";
import imgTascLogo from "../../assets/0399c2ba8c161094279ce73755571815f5821b3f.png";
import imgHeroBackground from "../../assets/92af4b4f6d222919f67bb7c7d0aac1c95ccd0dd3.png";
import imgRamadanIcon from "../../assets/26801037ad5843ab17db03f4b2a768ed8573f97c.png";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          portalId: string;
          formId: string;
          region?: string;
          target?: string;
        }) => void;
      };
    };
  }
}

export function KSABusinessTravel() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const hubspotFormTargetId = "hubspot-form-container";
  const hubspotHeroFormTargetId = "hubspot-form-container-hero";

  useEffect(() => {
    const existingForm = document.querySelector(
      `#${hubspotFormTargetId} .hbspt-form, #${hubspotHeroFormTargetId} .hbspt-form`
    );
    if (existingForm) return;

    const createForm = () => {
      if (!window.hbspt) return;
      window.hbspt.forms.create({
        portalId: "20309062",
        formId: "2ffd5877-cb68-47af-87e2-8d4aed687890",
        region: "na1",
        target: `#${hubspotFormTargetId}`,
      });
      window.hbspt.forms.create({
        portalId: "20309062",
        formId: "2ffd5877-cb68-47af-87e2-8d4aed687890",
        region: "na1",
        target: `#${hubspotHeroFormTargetId}`,
      });
    };

    if (document.querySelector("script[src='//js.hsforms.net/forms/embed/v2.js']")) {
      createForm();
      return;
    }

    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.charset = "utf-8";
    script.onload = createForm;
    document.body.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, []);

  return (
    <div className="w-full bg-white relative overflow-hidden">
      {/* Logo Only Header */}
      <div className="bg-white px-[72px] py-[25px] relative">
        <div className="h-[40px] w-auto">
          <img alt="TASC Logo" className="h-full w-auto object-contain" src={imgTascLogo} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#005f83] px-[72px] py-[70px] relative overflow-hidden min-h-[700px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img alt="Riyadh Skyline" className="w-full h-full object-cover object-top" src={imgHeroBackground} />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Hero Content - Two Column Layout */}
        <div className="relative z-10 max-w-[1280px] mx-auto w-full">
          <div className="grid grid-cols-2 gap-[50px] items-center">
            {/* Left Column - Text Content */}
            <div>
              <h1 className="text-[48px] font-['Poppins'] font-bold text-white leading-[58px] tracking-[-1.44px] mb-[16px] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                Ramadan Offer: 50% Off KSA Business Setup + Consulting
              </h1>
              <p className="text-white text-[20px] font-['Gotham'] leading-[32px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Launch in Saudi Arabia with a compliance-first setup roadmap—tailored to your business activity, structure, and market entry goals.
              </p>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-[16px] p-[25px] shadow-2xl">
              <h3 className="text-[20px] font-['Poppins'] font-bold text-[#005f83] mb-[18px] text-center">
                Get Your Setup Roadmap
              </h3>
              <div id={hubspotHeroFormTargetId} className="mb-[12px]"></div>
              <form className="space-y-[12px] hubspot-fallback-form">
                <div>
                  <label className="block text-[#005f83] text-[12px] font-['Gotham'] mb-[6px] font-medium">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-[12px] py-[8px] text-[13px] rounded-[6px] border-2 border-[#005f83] focus:outline-none focus:ring-2 focus:ring-[#00bfff] focus:border-transparent font-['Gotham']"
                  />
                </div>

                <div>
                  <label className="block text-[#005f83] text-[12px] font-['Gotham'] mb-[6px] font-medium">
                    Company *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-[12px] py-[8px] text-[13px] rounded-[6px] border-2 border-[#005f83] focus:outline-none focus:ring-2 focus:ring-[#00bfff] focus:border-transparent font-['Gotham']"
                  />
                </div>

                <div>
                  <label className="block text-[#005f83] text-[12px] font-['Gotham'] mb-[6px] font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-[12px] py-[8px] text-[13px] rounded-[6px] border-2 border-[#005f83] focus:outline-none focus:ring-2 focus:ring-[#00bfff] focus:border-transparent font-['Gotham']"
                  />
                </div>

                <div>
                  <label className="block text-[#005f83] text-[12px] font-['Gotham'] mb-[6px] font-medium">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-[12px] py-[8px] text-[13px] rounded-[6px] border-2 border-[#005f83] focus:outline-none focus:ring-2 focus:ring-[#00bfff] focus:border-transparent font-['Gotham']"
                  />
                </div>

                <div>
                  <label className="block text-[#005f83] text-[12px] font-['Gotham'] mb-[6px] font-medium">
                    Industry
                  </label>
                  <input
                    type="text"
                    className="w-full px-[12px] py-[8px] text-[13px] rounded-[6px] border-2 border-[#005f83] focus:outline-none focus:ring-2 focus:ring-[#00bfff] focus:border-transparent font-['Gotham']"
                  />
                </div>

                <div>
                  <label className="block text-[#005f83] text-[12px] font-['Gotham'] mb-[6px] font-medium">
                    What are you setting up? *
                  </label>
                  <select
                    required
                    className="w-full px-[12px] py-[8px] text-[13px] rounded-[6px] border-2 border-[#005f83] focus:outline-none focus:ring-2 focus:ring-[#00bfff] focus:border-transparent font-['Gotham'] appearance-none bg-white bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23005f83%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:18px] bg-[right_10px_center] bg-no-repeat"
                  >
                    <option value="">Select...</option>
                    <option value="llc">LLC / Limited Liability Company</option>
                    <option value="branch">Branch Office</option>
                    <option value="representative">Representative Office</option>
                    <option value="freelance">Freelance License</option>
                    <option value="freezone">Free Zone Entity</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#005f83] text-[12px] font-['Gotham'] mb-[6px] font-medium">
                    Notes
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-[12px] py-[8px] text-[13px] rounded-[6px] border-2 border-[#005f83] focus:outline-none focus:ring-2 focus:ring-[#00bfff] focus:border-transparent font-['Gotham'] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00bfff] to-[#56db46] rounded-[50px] px-[20px] py-[10px] text-white text-[14px] font-['Poppins'] font-semibold hover:shadow-lg transition-shadow"
                >
                  Book My Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-[#ffe102] px-[80px] py-[30px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center">
            <p className="text-[#005f83] text-[18px] font-['Poppins'] font-semibold leading-[28px]">
              End-to-end setup support • Clear roadmap • Compliance-forward delivery
            </p>
          </div>
        </div>
      </section>

      {/* What's included in the Ramadan offer */}
      <section className="px-[72px] py-[60px] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[54px] font-['Poppins'] font-semibold bg-gradient-to-r from-[#00bfff] to-[#56db46] bg-clip-text text-transparent leading-[66px] tracking-[-1.62px] mb-[15px] text-center">
            What's included in the Ramadan offer
          </h2>
          
          <div className="bg-gradient-to-br from-[#005f83] via-[#004a68] to-[#005f83] rounded-[32px] p-[45px] shadow-2xl relative overflow-hidden mt-[35px]">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00bfff]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-[#56db46]/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-2 gap-[20px]">
                <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-[20px] p-[30px] border border-white/10 hover:border-[#ffe102]/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex gap-[25px] items-start">
                    <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#ffe102] to-[#ffed66] rounded-[16px] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 24 24" stroke="#005f83" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-[22px] font-['Poppins'] font-bold mb-[8px]">
                        50% off business setup service fees
                      </h4>
                      <p className="text-white/90 text-[18px] font-['Gotham'] leading-[28px]">
                        Significant savings on our professional service fees for your KSA business setup.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-[20px] p-[30px] border border-white/10 hover:border-[#ffe102]/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex gap-[25px] items-start">
                    <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#ffe102] to-[#ffed66] rounded-[16px] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 24 24" stroke="#005f83" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-[22px] font-['Poppins'] font-bold mb-[8px]">
                        Consulting sessions
                      </h4>
                      <p className="text-white/90 text-[18px] font-['Gotham'] leading-[28px]">
                        Confirm structure, activity mapping, and the licensing route tailored to your needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-[20px] p-[30px] border border-white/10 hover:border-[#ffe102]/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex gap-[25px] items-start">
                    <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#ffe102] to-[#ffed66] rounded-[16px] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 24 24" stroke="#005f83" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-[22px] font-['Poppins'] font-bold mb-[8px]">
                        Documented setup roadmap
                      </h4>
                      <p className="text-white/90 text-[18px] font-['Gotham'] leading-[28px]">
                        Clear steps, inputs, dependencies, and estimated timelines for your business setup.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-[20px] p-[30px] border border-white/10 hover:border-[#ffe102]/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex gap-[25px] items-start">
                    <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#ffe102] to-[#ffed66] rounded-[16px] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 24 24" stroke="#005f83" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-[22px] font-['Poppins'] font-bold mb-[8px]">
                        Compliance-first guidance
                      </h4>
                      <p className="text-white/90 text-[18px] font-['Gotham'] leading-[28px]">
                        Post-setup requirements including renewals, registrations, and ongoing obligations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-[30px] bg-white/10 backdrop-blur-sm rounded-[12px] p-[16px] border border-white/20">
                <p className="text-white/80 text-[14px] font-['Gotham'] leading-[20px]">
                  <strong className="text-white">Small print:</strong> Discount applies to service fees only. Government fees and third-party charges excluded. T&Cs apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why TASC Corporate Services */}
      <section className="px-[72px] py-[60px] bg-[#f5f5f5]">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[54px] font-['Poppins'] font-semibold text-[#005f83] leading-[66px] tracking-[-1.62px] mb-[15px] text-center">
            Business setup should be fast—but never at the cost of compliance
          </h2>
          
          <div className="grid grid-cols-3 gap-[30px] mt-[45px]">
            <div className="bg-white rounded-[24px] p-[35px] shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-[70px] h-[70px] bg-gradient-to-br from-[#00bfff] to-[#56db46] rounded-[18px] flex items-center justify-center mb-[20px]">
                <svg className="w-[35px] h-[35px]" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[24px] font-['Poppins'] font-bold text-[#005f83] mb-[12px]">
                Clear documentation checklist
              </h3>
              <p className="text-[#005f83] text-[16px] font-['Gotham'] leading-[24px]">
                Managed coordination so you know exactly what's needed at each step.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-[35px] shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-[70px] h-[70px] bg-gradient-to-br from-[#00bfff] to-[#56db46] rounded-[18px] flex items-center justify-center mb-[20px]">
                <svg className="w-[35px] h-[35px]" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12M8 12h12m-12 5h12M3 7h.01M3 12h.01M3 17h.01" />
                </svg>
              </div>
              <h3 className="text-[24px] font-['Poppins'] font-bold text-[#005f83] mb-[12px]">
                Reduced back-and-forth
              </h3>
              <p className="text-[#005f83] text-[16px] font-['Gotham'] leading-[24px]">
                A guided process that minimizes delays and confusion.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-[35px] shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-[70px] h-[70px] bg-gradient-to-br from-[#00bfff] to-[#56db46] rounded-[18px] flex items-center justify-center mb-[20px]">
                <svg className="w-[35px] h-[35px]" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-[24px] font-['Poppins'] font-bold text-[#005f83] mb-[12px]">
                Practical compliance planning
              </h3>
              <p className="text-[#005f83] text-[16px] font-['Gotham'] leading-[24px]">
                Your launch doesn't stall after registration—we plan for what comes next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-step process */}
      <section className="px-[72px] py-[60px] bg-white">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[54px] font-['Poppins'] font-semibold bg-gradient-to-r from-[#00bfff] to-[#56db46] bg-clip-text text-transparent leading-[66px] tracking-[-1.62px] mb-[50px] text-center">
            Your setup journey in 3 steps
          </h2>
          
          <div className="space-y-[30px]">
            {/* Step 1 */}
            <div className="flex gap-[30px] items-start">
              <div className="w-[80px] h-[80px] bg-gradient-to-br from-[#00bfff] to-[#56db46] rounded-full flex items-center justify-center shrink-0 shadow-lg">
                <span className="text-white text-[36px] font-['Poppins'] font-bold">1</span>
              </div>
              <div className="flex-1 bg-[#f5f5f5] rounded-[20px] p-[30px]">
                <h3 className="text-[28px] font-['Poppins'] font-bold text-[#005f83] mb-[12px]">
                  Consultation & activity mapping
                </h3>
                <p className="text-[#005f83] text-[18px] font-['Gotham'] leading-[28px]">
                  Confirm structure + licensing path tailored to your business activity and market entry goals.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-[30px] items-start">
              <div className="w-[80px] h-[80px] bg-gradient-to-br from-[#00bfff] to-[#56db46] rounded-full flex items-center justify-center shrink-0 shadow-lg">
                <span className="text-white text-[36px] font-['Poppins'] font-bold">2</span>
              </div>
              <div className="flex-1 bg-[#f5f5f5] rounded-[20px] p-[30px]">
                <h3 className="text-[28px] font-['Poppins'] font-bold text-[#005f83] mb-[12px]">
                  Documentation & filings
                </h3>
                <p className="text-[#005f83] text-[18px] font-['Gotham'] leading-[28px]">
                  Managed submission + tracking to ensure everything moves forward smoothly.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-[30px] items-start">
              <div className="w-[80px] h-[80px] bg-gradient-to-br from-[#00bfff] to-[#56db46] rounded-full flex items-center justify-center shrink-0 shadow-lg">
                <span className="text-white text-[36px] font-['Poppins'] font-bold">3</span>
              </div>
              <div className="flex-1 bg-[#f5f5f5] rounded-[20px] p-[30px]">
                <h3 className="text-[28px] font-['Poppins'] font-bold text-[#005f83] mb-[12px]">
                  Launch readiness
                </h3>
                <p className="text-[#005f83] text-[18px] font-['Gotham'] leading-[28px]">
                  Registrations, renewals plan, operating checklist—everything you need to start operating compliantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-[72px] py-[60px] bg-[#005f83]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[54px] font-['Poppins'] font-semibold bg-gradient-to-r from-[#00bfff] to-[#56db46] bg-clip-text text-transparent leading-[66px] tracking-[-1.62px] mb-[35px] text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-[20px]">
            {/* FAQ 1 */}
            <div className="border-b border-[rgba(255,255,255,0.2)] pb-[20px]">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 1 ? null : 1)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-white text-[18px] font-['Poppins'] font-semibold">
                  What does the 50% discount apply to?
                </h3>
                <span className="text-white text-[24px]">{expandedFaq === 1 ? "−" : "+"}</span>
              </button>
              {expandedFaq === 1 && (
                <p className="text-white text-[16px] font-['Gotham'] mt-[15px] leading-[24px]">
                  Service fees for business setup and consulting. Government/third-party fees are excluded.
                </p>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="border-b border-[rgba(255,255,255,0.2)] pb-[20px]">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 2 ? null : 2)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-white text-[18px] font-['Poppins'] font-semibold">
                  Can you advise on the best structure for our activity?
                </h3>
                <span className="text-white text-[24px]">{expandedFaq === 2 ? "−" : "+"}</span>
              </button>
              {expandedFaq === 2 && (
                <p className="text-white text-[16px] font-['Gotham'] mt-[15px] leading-[24px]">
                  Yes—our consulting confirms the setup route based on your activity and operational plan.
                </p>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="border-b border-[rgba(255,255,255,0.2)] pb-[20px]">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 3 ? null : 3)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-white text-[18px] font-['Poppins'] font-semibold">
                  How long does KSA company setup take?
                </h3>
                <span className="text-white text-[24px]">{expandedFaq === 3 ? "−" : "+"}</span>
              </button>
              {expandedFaq === 3 && (
                <p className="text-white text-[16px] font-['Gotham'] mt-[15px] leading-[24px]">
                  Timelines vary by activity and approvals; we share an estimated plan after consultation.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form" className="px-[72px] py-[40px] bg-[#ffe102]">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-2 gap-[50px] items-start">
            {/* Left Column - Text */}
            <div>
              <h2 className="text-[36px] font-['Poppins'] font-semibold text-[#005f83] leading-[44px] tracking-[-0.96px] mb-[16px]">
                Get your Saudi setup roadmap
              </h2>
              <p className="text-[#005f83] text-[16px] font-['Gotham'] leading-[24px]">
                We'll contact you to schedule and confirm next steps.
              </p>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-[12px] p-[18px] shadow-lg" id="hubspot-form-container">
              <form className="space-y-[8px]">
                <div>
                  <label className="block text-[#005f83] text-[10px] font-['Poppins'] mb-[3px] font-medium">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-[8px] py-[5px] text-[12px] rounded-[4px] border border-[#005f83] focus:outline-none focus:ring-1 focus:ring-[#00bfff] font-['Gotham']"
                  />
                </div>
                <div>
                  <label className="block text-[#005f83] text-[10px] font-['Poppins'] mb-[3px] font-medium">
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    className="w-full px-[8px] py-[5px] text-[12px] rounded-[4px] border border-[#005f83] focus:outline-none focus:ring-1 focus:ring-[#00bfff] font-['Gotham']"
                  />
                </div>
                <div>
                  <label className="block text-[#005f83] text-[10px] font-['Poppins'] mb-[3px] font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-[8px] py-[5px] text-[12px] rounded-[4px] border border-[#005f83] focus:outline-none focus:ring-1 focus:ring-[#00bfff] font-['Gotham']"
                  />
                </div>
                <div>
                  <label className="block text-[#005f83] text-[10px] font-['Poppins'] mb-[3px] font-medium">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-[8px] py-[5px] text-[12px] rounded-[4px] border border-[#005f83] focus:outline-none focus:ring-1 focus:ring-[#00bfff] font-['Gotham']"
                  />
                </div>
                <div>
                  <label className="block text-[#005f83] text-[10px] font-['Poppins'] mb-[3px] font-medium">
                    Industry
                  </label>
                  <input
                    type="text"
                    name="industry"
                    className="w-full px-[8px] py-[5px] text-[12px] rounded-[4px] border border-[#005f83] focus:outline-none focus:ring-1 focus:ring-[#00bfff] font-['Gotham']"
                  />
                </div>
                <div>
                  <label className="block text-[#005f83] text-[10px] font-['Poppins'] mb-[3px] font-medium">
                    What are you setting up? *
                  </label>
                  <select
                    name="setup_type"
                    required
                    className="w-full px-[8px] py-[5px] text-[12px] rounded-[4px] border border-[#005f83] focus:outline-none focus:ring-1 focus:ring-[#00bfff] font-['Gotham']"
                  >
                    <option value="">Select...</option>
                    <option value="llc">LLC / Limited Liability Company</option>
                    <option value="branch">Branch Office</option>
                    <option value="representative">Representative Office</option>
                    <option value="freelance">Freelance License</option>
                    <option value="freezone">Free Zone Entity</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#005f83] text-[10px] font-['Poppins'] mb-[3px] font-medium">
                    Notes
                  </label>
                  <textarea
                    name="notes"
                    rows={2}
                    className="w-full px-[8px] py-[5px] text-[12px] rounded-[4px] border border-[#005f83] focus:outline-none focus:ring-1 focus:ring-[#00bfff] font-['Gotham'] resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00bfff] to-[#56db46] rounded-[50px] px-[16px] py-[8px] text-white text-[13px] font-['Poppins'] hover:shadow-lg transition-shadow mt-[6px]"
                >
                  Book My Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-[#00bfff] to-[#56db46] px-[72px] py-[50px] text-center">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-white text-[42px] font-['Poppins'] font-bold leading-[54px] mb-[20px]">
            Ready to launch your business in Saudi Arabia?
          </h2>
          <p className="text-white text-[20px] font-['Gotham'] leading-[32px] mb-[30px]">
            Take advantage of our Ramadan offer and get expert guidance every step of the way.
          </p>
          <a 
            href="#form"
            className="inline-block bg-white hover:bg-[#ffe102] rounded-[50px] px-[32px] py-[16px] text-[#005f83] text-[18px] font-['Poppins'] font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Book Your Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
