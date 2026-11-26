import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function WhatsAppButton() {
  const { i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) || 'en';

  const messages: Record<string, string> = {
    en: 'Hello Next Layer! I would like to discuss a website or digital system for my business.',
    lv: 'Sveiki, Next Layer! Vēlos apspriest mājaslapas vai digitālās sistēmas izstrādi manam uzņēmumam.',
    ru: 'Здравствуйте, Next Layer! Хочу обсудить разработку сайта или системы для моего бизнеса.',
  };

  const phoneNumber = '37125442055';
  const text = encodeURIComponent(messages[lang] || messages.en);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
    >
      <MessageCircle className="w-5 h-5 fill-white" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}