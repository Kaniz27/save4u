import { icon8Url } from "@/lib/icons8";

// A curated subset, not every icons8 icon — add new entries here as admins
// introduce new icon names through the Services editor.
const ICON8_SLUGS: Record<string, string> = {
  CreditCard: "bank-cards",
  Zap: "flash-on",
  ShieldCheck: "security-checked",
  Smartphone: "smartphone",
  Percent: "percentage",
  TrendingDown: "down",
  RefreshCw: "synchronize",
  FileText: "document",
  Leaf: "leaf",
  Clock: "clock",
  Home: "home",
  TrendingUp: "combo-chart",
  Search: "search",
  Target: "target",
  Share2: "share-2",
  BarChart3: "bar-chart",
  Banknote: "cash",
  Megaphone: "megaphone",
  Check: "checkmark",
  HelpCircle: "question-mark",
  Globe: "globe-earth",
  Monitor: "monitor",
  Wallet: "wallet",
  Headphones: "headphones",
  Lightbulb: "idea",
  Thermometer: "thermometer",
  Wind: "wind",
  Droplet: "water",
  HeartHandshake: "handshake",
  DollarSign: "price-tag-usd",
  Users: "group",
  MessageCircle: "chat-message",
  ClipboardList: "clipboard",
  Settings: "settings-3",
  ShoppingCart: "shopping-cart",
  Layout: "dashboard",
  Flame: "fire-element",
  Bot: "robot",
  Cpu: "chip",
  Sparkles: "sparkling",
  Workflow: "workflow",
  Link2: "link",
};

interface DynamicIconProps {
  name: string;
  size?: number;
  className?: string;
}

export function DynamicIcon({ name, size = 24, className = "" }: DynamicIconProps) {
  const slug = ICON8_SLUGS[name] ?? "question-mark";
  const pixelSize = size <= 32 ? 48 : size <= 56 ? 64 : 96;

  return (
    <img
      src={icon8Url(slug, pixelSize)}
      alt={name}
      className={`inline-block object-contain ${className}`}
      style={{ width: size, height: size }}
      loading="lazy"
    />
  );
}
