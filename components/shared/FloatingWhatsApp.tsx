import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { whatsappLink } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("Hi Yantra Biz, I'd like to know more.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40 flex items-center gap-3"
    >
      {/* Hover tooltip — desktop only */}
      <span className="hidden md:inline-flex items-center whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-900 shadow-card border border-ink-200 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
        Chat with us on WhatsApp
      </span>

      {/* Button + pulse ring */}
      <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card hover:bg-[#1ebd5a] hover:scale-105 transition-all duration-200">
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping"
        />
        <WhatsAppIcon className="relative h-5 w-5" />
      </span>
    </a>
  );
}
