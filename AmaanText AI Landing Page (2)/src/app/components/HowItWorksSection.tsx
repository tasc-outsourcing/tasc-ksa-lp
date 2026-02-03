import { useState } from 'react';

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      number: "01",
      title: "Upload Your Document",
      description: "Drag and drop your English document. We support PDF, DOCX, and PPTX formats up to 50MB."
    },
    {
      number: "02",
      title: "AI Translation",
      description: "Our AI processes your document, translating text while preserving formatting, tables, and layouts."
    },
    {
      number: "03",
      title: "Human Review",
      description: "Expert linguists review critical sections for accuracy and cultural context."
    },
    {
      number: "04",
      title: "Download Arabic Version",
      description: "Receive your professionally translated document, ready for board meetings and legal use."
    }
  ];

  return (
    <section className="py-32 px-8 lg:px-16 bg-[#005f83] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 225, 2, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 225, 2, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-[56px] font-bold text-white mb-6 font-['Poppins',sans-serif] leading-tight">
            Watch Your Document<br />
            <span className="text-[#ffe102]">Transform in Real-Time</span>
          </h2>
          <p className="text-[20px] text-white/80 max-w-2xl mx-auto font-['Poppins',sans-serif]">
            Click through each step to see how AmaanText AI translates enterprise documents
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 items-start">
          {/* LEFT: Document Preview */}
          <div className="lg:sticky lg:top-20">
            <div className="bg-white rounded-[24px] shadow-2xl overflow-hidden" style={{ height: '700px' }}>
              {/* Document Header */}
              <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-8 py-6 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#005f83] flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[16px] font-bold text-[#005f83]">
                      {activeStep < 4 ? 'Employment_Contract.pdf' : 'عقد_التوظيف.pdf'}
                    </div>
                    <div className="text-[13px] text-gray-500">
                      {activeStep < 4 ? 'English Document' : 'مستند عربي'} • 2.4 MB
                    </div>
                  </div>
                </div>
                
                {/* Status Indicator */}
                <div className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-500 ${
                  activeStep === 0 ? 'bg-blue-100 text-blue-700' :
                  activeStep === 1 ? 'bg-green-100 text-green-700 animate-pulse' :
                  activeStep === 2 ? 'bg-purple-100 text-purple-700' :
                  'bg-[#ffe102] text-[#005f83]'
                }`}>
                  {activeStep === 0 ? '● Ready to Upload' :
                   activeStep === 1 ? '● Translating...' :
                   activeStep === 2 ? '● Under Review' :
                   '✓ Complete'}
                </div>
              </div>
              
              {/* Document Content */}
              <div className="p-10 h-full bg-white overflow-hidden relative">
                {/* Step 0: Original Document */}
                {activeStep === 0 && (
                  <div className="animate-fadeIn space-y-6">
                    <div>
                      <div className="text-[24px] font-bold text-[#005f83] mb-2">EMPLOYMENT AGREEMENT</div>
                      <div className="h-1 w-32 bg-[#005f83] rounded"></div>
                    </div>
                    
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p className="text-[15px]">
                        <span className="font-semibold">This Employment Agreement</span> ("Agreement") is entered into as of January 15, 2025, by and between <span className="font-semibold">ABC Corporation</span> ("Employer") and <span className="font-semibold">John Smith</span> ("Employee").
                      </p>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#005f83]">
                        <div className="font-bold text-[#005f83] mb-2">1. POSITION AND DUTIES</div>
                        <p className="text-[14px]">Employee is hired as Senior Software Engineer and shall perform duties as assigned by management.</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#005f83]">
                        <div className="font-bold text-[#005f83] mb-2">2. COMPENSATION</div>
                        <p className="text-[14px]">Employee shall receive an annual salary of $120,000 USD, payable in accordance with standard company practices.</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#005f83]">
                        <div className="font-bold text-[#005f83] mb-2">3. BENEFITS</div>
                        <p className="text-[14px]">Employee is eligible for health insurance, 20 days paid vacation, and retirement plan contributions.</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Step 1: AI Translation in Progress */}
                {activeStep === 1 && (
                  <div className="animate-fadeIn space-y-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-green-50/0 via-green-50/30 to-green-50/0 animate-pulse"></div>
                    
                    <div className="relative">
                      <div className="text-[24px] font-bold text-[#005f83] mb-2 flex items-center gap-3">
                        <span className="opacity-50">EMPLOYMENT AGREEMENT</span>
                        <svg className="w-6 h-6 text-green-600 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      <div className="h-1 w-32 bg-[#005f83] rounded"></div>
                    </div>
                    
                    <div className="space-y-4 relative">
                      <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                          <span className="text-[13px] font-semibold text-green-700">Translating text...</span>
                        </div>
                        <p className="text-[14px] text-gray-600 line-through opacity-50">
                          This Employment Agreement ("Agreement") is entered into as of January 15, 2025...
                        </p>
                        <p className="text-[14px] text-[#005f83] font-semibold mt-2" dir="rtl">
                          يتم إبرام اتفاقية التوظيف هذه ("الاتفاقية") في 15 يناير 2025...
                        </p>
                      </div>
                      
                      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg opacity-70">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse"></div>
                          <span className="text-[13px] font-semibold text-yellow-700">Processing section 2...</span>
                        </div>
                        <div className="space-y-1">
                          <div className="h-2 bg-yellow-200 rounded w-full animate-pulse"></div>
                          <div className="h-2 bg-yellow-200 rounded w-4/5 animate-pulse"></div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg opacity-40">
                        <div className="font-bold text-[#005f83] mb-2">3. BENEFITS</div>
                        <div className="space-y-1">
                          <div className="h-2 bg-gray-200 rounded w-full"></div>
                          <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* AI Progress Indicator */}
                    <div className="absolute bottom-8 left-0 right-0 bg-white/90 backdrop-blur p-4 rounded-lg shadow-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[13px] font-semibold text-gray-700">AI Translation Progress</span>
                        <span className="text-[13px] font-bold text-green-600">68%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full animate-progress" style={{ width: '68%' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Human Review */}
                {activeStep === 2 && (
                  <div className="animate-fadeIn space-y-6" dir="rtl">
                    <div>
                      <div className="text-[24px] font-bold text-[#005f83] mb-2">اتفاقية التوظيف</div>
                      <div className="h-1 w-32 bg-[#005f83] rounded mr-auto"></div>
                    </div>
                    
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p className="text-[15px]">
                        يتم إبرام <span className="font-semibold">اتفاقية التوظيف</span> هذه ("الاتفاقية") في 15 يناير 2025، بين <span className="font-semibold">شركة ABC</span> ("صاحب العمل") و <span className="font-semibold">جون سميث</span> ("الموظف").
                      </p>
                      
                      <div className="bg-purple-50 p-4 rounded-lg border-r-4 border-purple-600 relative">
                        <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-purple-600 text-white px-3 py-1 rounded-full text-[11px] font-bold">
                          ✓ Reviewed
                        </div>
                        <div className="font-bold text-[#005f83] mb-2">1. المنصب والمسؤوليات</div>
                        <p className="text-[14px]">يتم تعيين الموظف كمهندس برمجيات أول وسيؤدي الواجبات المكلف بها من قبل الإدارة.</p>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg border-r-4 border-purple-600 relative">
                        <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-purple-600 text-white px-3 py-1 rounded-full text-[11px] font-bold">
                          ✓ Reviewed
                        </div>
                        <div className="font-bold text-[#005f83] mb-2">2. التعويض</div>
                        <p className="text-[14px]">سيحصل الموظف على راتب سنوي قدره 120,000 دولار أمريكي، يُدفع وفقاً لممارسات الشركة القياسية.</p>
                      </div>
                      
                      <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded-lg animate-pulse">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-yellow-600 rounded-full animate-ping"></div>
                          <span className="text-[12px] font-bold text-yellow-700">Expert reviewing this section...</span>
                        </div>
                        <div className="font-bold text-[#005f83] mb-2">3. المزايا</div>
                        <p className="text-[14px]">الموظف مؤهل للحصول على تأمين صحي، 20 يوم إجازة مدفوعة، ومساهمات خطة التقاعد.</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Step 3: Final Arabic Document */}
                {activeStep === 3 && (
                  <div className="animate-fadeIn space-y-6" dir="rtl">
                    <div className="relative">
                      <div className="absolute -top-2 -right-2 bg-green-600 text-white px-4 py-1 rounded-full text-[12px] font-bold shadow-lg animate-bounce">
                        ✓ Translation Complete
                      </div>
                      <div className="text-[24px] font-bold text-[#005f83] mb-2">اتفاقية التوظيف</div>
                      <div className="h-1 w-32 bg-[#ffe102] rounded mr-auto"></div>
                    </div>
                    
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p className="text-[15px]">
                        يتم إبرام <span className="font-semibold">اتفاقية التوظيف</span> هذه ("الاتفاقية") في 15 يناير 2025، بين <span className="font-semibold">شركة ABC</span> ("صاحب العمل") و <span className="font-semibold">جون سميث</span> ("الموظف").
                      </p>
                      
                      <div className="bg-gradient-to-br from-[#ffe102]/20 to-[#ffd700]/20 p-4 rounded-lg border-r-4 border-[#ffe102]">
                        <div className="font-bold text-[#005f83] mb-2">1. المنصب والمسؤوليات</div>
                        <p className="text-[14px]">يتم تعيين الموظف كمهندس برمجيات أول وسيؤدي الواجبات المكلف بها من قبل الإدارة.</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-[#ffe102]/20 to-[#ffd700]/20 p-4 rounded-lg border-r-4 border-[#ffe102]">
                        <div className="font-bold text-[#005f83] mb-2">2. التعويض</div>
                        <p className="text-[14px]">سيحصل الموظف على راتب سنوي قدره 120,000 دولار أمريكي، يُدفع وفقاً لممارسات الشركة القياسية.</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-[#ffe102]/20 to-[#ffd700]/20 p-4 rounded-lg border-r-4 border-[#ffe102]">
                        <div className="font-bold text-[#005f83] mb-2">3. المزايا</div>
                        <p className="text-[14px]">الموظف مؤهل للحصول على تأمين صحي، 20 يوم إجازة مدفوعة، ومساهمات خطة التقاعد.</p>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t-2 border-gray-200">
                        <div className="flex items-center gap-3 text-[13px] text-gray-600">
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold">98% Accuracy</span>
                          </div>
                          <span>•</span>
                          <span>Formatting Preserved</span>
                          <span>•</span>
                          <span>Ready for Board Review</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* RIGHT: Step Cards */}
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`group w-full text-left transition-all duration-300 ${
                  idx === activeStep ? 'scale-[1.03]' : 'hover:scale-[1.01]'
                }`}
              >
                <div className={`relative rounded-[24px] p-6 transition-all duration-300 ${
                  idx === activeStep 
                    ? 'bg-gradient-to-br from-[#ffe102] to-[#ffd700] shadow-2xl' 
                    : 'bg-white/10 hover:bg-white/15 backdrop-blur-sm'
                }`}>
                  {idx === activeStep && (
                    <>
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#ffe102] to-[#ffd700] rounded-[26px] blur-xl opacity-60 animate-pulse"></div>
                      <div className="absolute top-4 right-4 bg-[#005f83] text-white px-3 py-1 rounded-full text-[11px] font-bold">
                        ACTIVE
                      </div>
                    </>
                  )}
                  
                  <div className="relative flex gap-5 items-start">
                    {/* Number */}
                    <div className={`flex-shrink-0 w-14 h-14 rounded-[16px] flex items-center justify-center text-[24px] font-bold transition-all duration-300 ${
                      idx === activeStep 
                        ? 'bg-[#005f83] text-[#ffe102] shadow-lg' 
                        : 'bg-white/10 text-white/40'
                    }`}>
                      {step.number}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3 className={`text-[22px] font-bold mb-2 font-['Poppins',sans-serif] transition-all duration-300 ${
                        idx === activeStep ? 'text-[#005f83]' : 'text-white'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-[14px] leading-relaxed font-['Poppins',sans-serif] transition-all duration-300 ${
                        idx === activeStep ? 'text-[#005f83]/70' : 'text-white/60'
                      }`}>
                        {step.description}
                      </p>
                      
                      {idx !== activeStep && (
                        <div className="mt-3 text-[12px] text-white/40 group-hover:text-white/70 transition-colors flex items-center gap-1">
                          <span>Click to view</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            ))}
            
            {/* CTA Button */}
            <div className="pt-6">
              <button className="w-full bg-gradient-to-r from-[#ffe102] to-[#ffd700] text-[#005f83] px-8 py-5 rounded-[20px] text-[18px] font-bold hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3">
                <span>Try AmaanText AI Free</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 68%; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-progress {
          animation: progress 2s ease-out infinite;
        }
      `}</style>
    </section>
  );
}
