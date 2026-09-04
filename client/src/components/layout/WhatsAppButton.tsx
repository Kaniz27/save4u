import { useSiteSettings } from "@/hooks/useSiteSettings";

export function WhatsAppButton() {
  const settings = useSiteSettings();
  const digits = settings.contactPhone.replace(/[^\d]/g, "");

  if (!digits) return null;

  return (
    <a
      href={`https://wa.me/${digits}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-transform duration-300 hover:scale-110 active:scale-95"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-75 group-hover:opacity-0" />
      <svg viewBox="0 0 32 32" width={30} height={30} className="relative" fill="white" aria-hidden="true">
        <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.34.663 4.523 1.812 6.375L4 29l7.833-1.75A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm6.98 16.87c-.29.816-1.44 1.5-2.37 1.7-.63.13-1.45.24-4.21-.9-3.53-1.46-5.8-5.02-5.98-5.25-.17-.24-1.42-1.89-1.42-3.6 0-1.71.9-2.55 1.22-2.9.29-.32.63-.4.84-.4.21 0 .42 0 .6.01.19.01.45-.07.7.54.29.7.98 2.41 1.06 2.58.08.17.14.37.03.6-.11.24-.17.38-.34.58-.17.2-.36.45-.51.6-.17.17-.35.36-.15.7.2.35.9 1.48 1.93 2.4 1.33 1.18 2.44 1.55 2.79 1.72.35.17.55.15.76-.09.2-.24.87-1.02 1.1-1.37.23-.35.46-.29.77-.17.31.11 1.97.93 2.3 1.1.34.17.56.25.65.4.09.15.09.85-.2 1.67Z" />
      </svg>
    </a>
  );
}
