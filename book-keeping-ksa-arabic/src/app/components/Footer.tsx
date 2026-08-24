import { Clock, Linkedin, Mail, MapPin, Youtube } from "lucide-react";
import imgLogo from "figma:asset/41e69c87d6d5db14d880a06ff62d5895911e23fc.png";
import { CONTACT } from "../config";

const offices = [
  {
    name: "الرياض | المكتب الرئيسي",
    lines: [
      "Top Talent Consulting Ltd.",
      "المبنى 1، المكتب رقم 4، الدور الأول",
      "شارع صلاح الدين الأيوبي",
      "حي الملك عبدالعزيز",
      "الرياض، المملكة العربية السعودية | ص.ب 11452",
    ],
    directions: "https://www.google.com/maps/search/?api=1&query=Building%201%2C%20Office%204%2C%20Salahuddin%20Al%20Ayoubi%20Street%2C%20King%20Abdulaziz%20District%2C%20Riyadh%2C%20Saudi%20Arabia",
  },
  {
    name: "الرياض | مركز الملك عبدالله المالي",
    lines: [
      "المستوى 7، المبنى 407",
      "المنطقة 4",
      "مركز الملك عبدالله المالي",
      "الرياض 13511",
      "المملكة العربية السعودية",
    ],
    directions: "https://www.google.com/maps/search/?api=1&query=Level%207%2C%20Building%20407%2C%20Zone%204%2C%20King%20Abdullah%20Financial%20District%2C%20Riyadh%2013511%2C%20Saudi%20Arabia",
  },
  {
    name: "الخبر",
    lines: [
      "أبراج الراشد",
      "طريق الظهران، الدور الثاني",
      "الخبر",
      "المملكة العربية السعودية | ص.ب 34448",
    ],
    directions: "https://www.google.com/maps/search/?api=1&query=Al%20Rashid%20Towers%2C%20Dhahran%20Road%2C%20Al%20Khobar%2C%20Saudi%20Arabia",
  },
];

const socials = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/tasccorporateservices/?viewAsMember=true",
  },
  {
    label: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@tasccorporateservices",
  },
];

const linkFocus = "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#FFE102]";

function IsolatedText({ children }: { children: string }) {
  return (
    <>
      {children.split(/(\d[\d,.]*)/).map((part, index) =>
        /^\d/.test(part) ? <bdi key={`${part}-${index}`} dir="ltr">{part}</bdi> : part
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#003f59] px-6 py-12 text-white md:px-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="border-b border-white/15 pb-8">
          <img src={imgLogo} alt="شعار تاسك لخدمات الشركات" className="h-[44px] w-[200px] object-contain object-right" />
          <h2 className="mt-4 text-[19px] font-semibold">تاسك لخدمات الشركات</h2>
          <p className="mt-1 text-[13px] text-white/65">مسجلة باسم <bdi dir="ltr">Top Talent Consulting Ltd.</bdi></p>
        </div>

        <div className="grid gap-8 border-b border-white/15 py-9 lg:grid-cols-3">
          {offices.map((office) => (
            <article key={office.name}>
              <h3 className="text-[13px] font-semibold tracking-[0.4px] text-[#FFE102]">{office.name}</h3>
              <address className="mt-4 not-italic text-[13px] leading-[1.75] text-white/75">
                {office.lines.map((line, index) => (
                  <span key={line} className="block">
                    {index === 0 && line === "Top Talent Consulting Ltd." ? <bdi dir="ltr">{line}</bdi> : <IsolatedText>{line}</IsolatedText>}
                  </span>
                ))}
              </address>
              <a href={office.directions} target="_blank" rel="noreferrer" className={`mt-4 flex w-fit items-center gap-2 text-[13px] font-semibold text-white ${linkFocus}`}>
                <MapPin className="h-4 w-4 text-[#FFE102]" aria-hidden="true" />
                الاتجاهات
              </a>
            </article>
          ))}
        </div>

        <div className="grid gap-8 border-b border-white/15 py-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3 text-[13px] text-white/75">
            <a href={`mailto:${CONTACT.email}`} className={`flex w-fit items-center gap-2 ${linkFocus}`}>
              <Mail className="h-4 w-4 text-[#FFE102]" aria-hidden="true" />
              <span dir="ltr" className="ltr">{CONTACT.email}</span>
            </a>
          </div>
          <p className="flex items-start gap-2 text-[13px] text-white/75">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#FFE102]" aria-hidden="true" />
            الأحد إلى الخميس، من <bdi dir="ltr">8:00</bdi> صباحًا حتى <bdi dir="ltr">5:30</bdi> مساءً
          </p>
          <div className="flex gap-3 md:col-span-2 lg:col-span-1 lg:justify-end">
            {socials.map(({ label, icon: Icon, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/75 hover:text-white ${linkFocus}`}>
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-[12px] text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <a href="#" className={linkFocus}>الشروط والأحكام</a>
            <span aria-hidden="true">·</span>
            <a href="#" className={linkFocus}>سياسة الخصوصية</a>
          </div>
          <p>© <bdi dir="ltr">2026</bdi> تاسك لخدمات الشركات. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
