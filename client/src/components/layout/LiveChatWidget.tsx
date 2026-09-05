import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, X, Send } from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { classNames } from "@/lib/utils";

type ChatMessage = { from: "bot" | "user"; text: string };
type Stage = "name" | "topic" | "detail";

const TOPICS = {
  payment: {
    label: "Payment Solutions",
    to: "/payment-solution",
    blurb:
      "We set up fast, secure card machines and EPOS systems for retail, hospitality, or mobile businesses — with next-day settlement and no long lock-in contracts.",
    waMessage: "Hi Save4u, I'd like to know more about your Payment Solutions (card machines & EPOS).",
    keywords: ["card", "epos", "terminal", "payment", "pdq", "machine"],
  },
  funding: {
    label: "Merchant Cash Advance",
    to: "/merchant-cash-advance",
    blurb:
      "Access flexible business funding against your future card sales — fast approval, no fixed monthly repayments, funds in as little as 48 hours.",
    waMessage: "Hi Save4u, I'd like to know more about Merchant Cash Advance funding.",
    keywords: ["fund", "loan", "advance", "cash", "money", "capital", "borrow"],
  },
  marketing: {
    label: "Digital Marketing",
    to: "/digital-marketing",
    blurb: "We grow your business online with SEO, social media, and ad campaigns built around your goals and budget.",
    waMessage: "Hi Save4u, I'd like to know more about your Digital Marketing services.",
    keywords: ["market", "seo", "social", "ads", "website", "customer", "google"],
  },
  energy: {
    label: "Business Energy",
    to: "/business-energy",
    blurb:
      "We compare business gas and electricity rates across the UK's leading suppliers to find you a better deal, then manage renewals for you.",
    waMessage: "Hi Save4u, I'd like to know more about switching my Business Energy supplier.",
    keywords: ["energy", "gas", "electric", "bill", "supplier", "tariff"],
  },
} as const;

type TopicKey = keyof typeof TOPICS;

function matchTopic(text: string): TopicKey | null {
  const lower = text.toLowerCase();
  for (const key of Object.keys(TOPICS) as TopicKey[]) {
    if (TOPICS[key].keywords.some((k) => lower.includes(k))) return key;
  }
  return null;
}

export function LiveChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [stage, setStage] = useState<Stage>("name");
  const [topicKey, setTopicKey] = useState<TopicKey | null>(null);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const settings = useSiteSettings();
  const digits = settings.contactPhone.replace(/[^\d]/g, "");

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        { from: "bot", text: "Hi there 👋 I'm the Save4u Assistant." },
        { from: "bot", text: "Can I grab your first name?" },
      ]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, stage, open]);

  function pushBot(text: string) {
    setMessages((m) => [...m, { from: "bot", text }]);
  }

  function selectTopic(key: TopicKey) {
    setMessages((m) => [...m, { from: "user", text: TOPICS[key].label }]);
    setTopicKey(key);
    setStage("detail");
    window.setTimeout(() => pushBot(TOPICS[key].blurb), 350);
  }

  function handleSend() {
    const value = input.trim();
    if (!value) return;
    setInput("");
    setMessages((m) => [...m, { from: "user", text: value }]);

    if (stage === "name") {
      window.setTimeout(() => {
        pushBot(`Great to meet you, ${value}! What can I help you with today?`);
        setStage("topic");
      }, 350);
      return;
    }

    const matched = matchTopic(value);
    if (matched) {
      setTopicKey(matched);
      setStage("detail");
      window.setTimeout(() => pushBot(TOPICS[matched].blurb), 350);
    } else {
      window.setTimeout(
        () => pushBot("Thanks! Let me connect you with our team on WhatsApp so they can help directly."),
        350,
      );
    }
  }

  if (!digits) return null;

  return (
    <>
      <div
        className={classNames(
          "fixed bottom-40 right-6 z-40 flex max-h-[70vh] w-[calc(100vw-3rem)] max-w-[340px] origin-bottom-right flex-col overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 transition-all duration-300",
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0",
        )}
      >
        <div className="flex items-center gap-3 bg-brand-gradient px-5 py-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 font-heading text-sm font-bold text-white">
            S4
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-heading text-sm font-bold text-white">Save4u Assistant</p>
            <p className="text-xs text-white/80">Usually replies instantly</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
          {messages.map((msg, i) => (
            <div key={i} className={classNames("flex", msg.from === "user" ? "justify-end" : "justify-start")}>
              <div
                className={classNames(
                  "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                  msg.from === "user"
                    ? "rounded-br-sm bg-brand-blue text-white"
                    : "rounded-bl-sm bg-brand-bg text-slate-700",
                )}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {stage === "topic" && (
            <div className="flex flex-wrap gap-2 pt-1">
              {(Object.keys(TOPICS) as TopicKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => selectTopic(key)}
                  className="rounded-full border border-brand-blue px-3.5 py-2 text-xs font-bold text-brand-blue-dark transition-colors hover:bg-brand-blue hover:text-white"
                >
                  {TOPICS[key].label}
                </button>
              ))}
            </div>
          )}

          {stage === "detail" && topicKey && (
            <div className="flex flex-col gap-2 pt-1">
              <button
                type="button"
                onClick={() => navigate(TOPICS[topicKey].to)}
                className="rounded-full bg-brand-navy px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-brand-blue-dark"
              >
                View {TOPICS[topicKey].label} page
              </button>
              <a
                href={`https://wa.me/${digits}?text=${encodeURIComponent(TOPICS[topicKey].waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-[#25D366] px-4 py-2.5 text-center text-xs font-bold text-[#1f9e52] transition-colors hover:bg-[#25D366] hover:text-white"
              >
                Chat on WhatsApp
              </a>
              <button
                type="button"
                onClick={() => {
                  setStage("topic");
                  pushBot("Sure — what else can I help with?");
                }}
                className="text-center text-xs font-semibold text-brand-blue-dark underline underline-offset-2"
              >
                Ask about something else
              </button>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        <div className="flex items-center gap-2 border-t border-brand-border px-3 py-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
            placeholder={stage === "name" ? "Type your first name..." : "Type a message..."}
            className="min-w-0 flex-1 rounded-full border border-brand-border bg-brand-bg px-4 py-2 text-sm text-slate-800 outline-none focus:border-brand-blue"
          />
          <button
            type="button"
            onClick={handleSend}
            aria-label="Send message"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white transition-colors hover:bg-brand-blue-dark"
          >
            <Send size={16} />
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with us"}
        aria-expanded={open}
        className="group fixed bottom-24 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient shadow-xl transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        {!open && <span className="absolute inset-0 animate-ping rounded-full bg-brand-blue opacity-60 group-hover:opacity-0" />}
        <span className="relative">{open ? <X size={24} color="white" /> : <MessageCircle size={24} color="white" fill="white" />}</span>
      </button>
    </>
  );
}
