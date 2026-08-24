import { useEffect, useState } from "react";
import { Mail, MapPin } from "lucide-react";
import imgLogo from "figma:asset/41e69c87d6d5db14d880a06ff62d5895911e23fc.png";
import { CONTACT, HEAD_OFFICE_MAP_URL } from "../config";

const focusStyle =
  "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFE102]";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] min-h-10 bg-[#003f59] text-white">
        <div className="mx-auto flex min-h-10 max-w-[1400px] flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-2 text-[11px] sm:text-[12px] md:justify-start md:px-16">
          <a
            href={HEAD_OFFICE_MAP_URL}
            target="_blank"
            rel="noreferrer"
            className={`hidden items-center gap-2 sm:inline-flex ${focusStyle}`}
          >
            <MapPin className="h-3.5 w-3.5 shrink-0 text-[#FFE102]" aria-hidden="true" />
            <span className="hidden md:inline">شارع صلاح الدين الأيوبي، حي الملك عبدالعزيز، الرياض</span>
            <span className="md:hidden">الرياض، المملكة العربية السعودية</span>
          </a>
          <span className="hidden h-4 w-px bg-white/30 sm:block" aria-hidden="true" />
          <a href={`mailto:${CONTACT.email}`} className={`inline-flex items-center gap-2 ${focusStyle}`}>
            <Mail className="h-3.5 w-3.5 text-[#FFE102]" aria-hidden="true" />
            <span dir="ltr" className="ltr">{CONTACT.email}</span>
          </a>
        </div>
      </div>
      <header
        className={`fixed inset-x-0 top-10 z-50 py-3 transition-colors duration-200 md:py-4 ${
          scrolled ? "bg-[#005f83]/95 shadow-lg backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 md:px-16">
          <a href="#top" aria-label="الصفحة الرئيسية لتاسك لخدمات الشركات" className={focusStyle}>
            <img alt="شعار تاسك لخدمات الشركات" className="h-9 w-[140px] object-contain" src={imgLogo} />
          </a>
          <a
            href="/book-keeping-ksa/"
            lang="en"
            dir="ltr"
            className={`inline-flex items-center rounded-full border border-white/55 bg-[#005f83]/45 px-3.5 py-1.5 text-[12px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 ${focusStyle}`}
          >
            English
          </a>
        </div>
      </header>
    </>
  );
}
