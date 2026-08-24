import { MessageCircle } from "lucide-react";
import { CONTACT } from "../config";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label={`تواصل مع تاسك عبر واتساب على الرقم ${CONTACT.phoneDisplay}`}
      className="fixed bottom-5 end-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-l from-[#00bfff] to-[#56db46] text-white shadow-[0_10px_28px_rgba(0,63,89,0.3)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFE102]"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
