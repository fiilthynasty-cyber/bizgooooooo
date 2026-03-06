export type IntentLevel = "hot" | "warm" | "cool" | "cold";
export type LeadStatus = "new" | "contacted" | "qualified" | "proposal" | "won" | "lost";
export type LeadSource = "organic" | "paid" | "referral" | "social" | "email";

export interface LeadSignal {
  type: string;
  description: string;
  weight: number;
  timestamp: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  title: string;
  intentScore: number;
  intentLevel: IntentLevel;
  status: LeadStatus;
  source: LeadSource;
  lastActivity: string;
  createdAt: string;
  signals: LeadSignal[];
  tags: string[];
}

export interface Subscriber {
  id: string;
  email: string;
  name: string;
  source: LeadSource;
  status: "active" | "unsubscribed" | "bounced";
  subscribedAt: string;
  leadScore: number;
  engagementRate: number;
}

export const leads: Lead[] = [
  {
    id: "L001",
    name: "Sarah Chen",
    email: "sarah.chen@techcorp.io",
    company: "TechCorp",
    title: "Head of Growth",
    intentScore: 92,
    intentLevel: "hot",
    status: "won",
    source: "organic",
    lastActivity: "10 min ago",
    createdAt: "2026-01-15",
    signals: [
      { type: "Demo", description: "Booked and attended demo", weight: 35, timestamp: "10m ago" },
      { type: "Email", description: "Replied to pricing email", weight: 20, timestamp: "1h ago" },
    ],
    tags: ["enterprise", "high-intent"],
  },
  {
    id: "L002",
    name: "Marcus Johnson",
    email: "m.johnson@growthly.com",
    company: "Growthly",
    title: "Revenue Ops Manager",
    intentScore: 85,
    intentLevel: "hot",
    status: "proposal",
    source: "referral",
    lastActivity: "3h ago",
    createdAt: "2026-01-20",
    signals: [
      { type: "Page Visit", description: "Visited pricing 4 times", weight: 18, timestamp: "3h ago" },
    ],
    tags: ["mid-market"],
  },
  {
    id: "L003",
    name: "Elena Rodriguez",
    email: "elena@startupx.co",
    company: "StartupX",
    title: "Founder",
    intentScore: 74,
    intentLevel: "warm",
    status: "qualified",
    source: "paid",
    lastActivity: "1d ago",
    createdAt: "2026-02-01",
    signals: [{ type: "Content", description: "Downloaded buyer guide", weight: 12, timestamp: "1d ago" }],
    tags: ["startup"],
  },
  {
    id: "L004",
    name: "David Kim",
    email: "d.kim@enterprise.co",
    company: "Enterprise Co",
    title: "VP Sales",
    intentScore: 61,
    intentLevel: "warm",
    status: "contacted",
    source: "organic",
    lastActivity: "2d ago",
    createdAt: "2026-02-05",
    signals: [{ type: "Email", description: "Opened outreach sequence", weight: 8, timestamp: "2d ago" }],
    tags: ["enterprise"],
  },
  {
    id: "L005",
    name: "Amira Patel",
    email: "amira@digitalfirst.io",
    company: "DigitalFirst",
    title: "Marketing Lead",
    intentScore: 48,
    intentLevel: "cool",
    status: "new",
    source: "social",
    lastActivity: "4d ago",
    createdAt: "2026-02-10",
    signals: [{ type: "Page Visit", description: "Viewed homepage", weight: 4, timestamp: "4d ago" }],
    tags: ["smb"],
  },
  {
    id: "L006",
    name: "James Wright",
    email: "j.wright@scaleup.com",
    company: "ScaleUp",
    title: "CEO",
    intentScore: 33,
    intentLevel: "cold",
    status: "lost",
    source: "email",
    lastActivity: "5d ago",
    createdAt: "2026-01-25",
    signals: [{ type: "Email", description: "Opened 1 email", weight: 3, timestamp: "5d ago" }],
    tags: ["tech", "startup"],
  },
];

export const subscribers: Subscriber[] = [
  { id: "S001", email: "sarah.chen@techcorp.io", name: "Sarah Chen", source: "organic", status: "active", subscribedAt: "2026-01-15", leadScore: 92, engagementRate: 87 },
  { id: "S002", email: "m.johnson@growthly.com", name: "Marcus Johnson", source: "referral", status: "active", subscribedAt: "2026-01-20", leadScore: 85, engagementRate: 72 },
  { id: "S003", email: "elena@startupx.co", name: "Elena Rodriguez", source: "paid", status: "active", subscribedAt: "2026-02-01", leadScore: 74, engagementRate: 65 },
  { id: "S004", email: "d.kim@enterprise.co", name: "David Kim", source: "organic", status: "active", subscribedAt: "2026-02-05", leadScore: 61, engagementRate: 54 },
  { id: "S005", email: "amira@digitalfirst.io", name: "Amira Patel", source: "social", status: "active", subscribedAt: "2026-02-10", leadScore: 48, engagementRate: 41 },
  { id: "S006", email: "j.wright@scaleup.com", name: "James Wright", source: "email", status: "unsubscribed", subscribedAt: "2026-01-25", leadScore: 33, engagementRate: 12 },
  { id: "S007", email: "l.nakamura@bigco.jp", name: "Lisa Nakamura", source: "referral", status: "active", subscribedAt: "2026-01-10", leadScore: 88, engagementRate: 91 },
  { id: "S008", email: "carlos@latamgrowth.co", name: "Carlos Mendez", source: "paid", status: "active", subscribedAt: "2026-02-15", leadScore: 56, engagementRate: 38 },
  { id: "S009", email: "info@bounced.com", name: "Test Bounce", source: "email", status: "bounced", subscribedAt: "2026-02-20", leadScore: 0, engagementRate: 0 },
  { id: "S010", email: "alex@newco.io", name: "Alex Turner", source: "organic", status: "active", subscribedAt: "2026-03-01", leadScore: 42, engagementRate: 35 },
];

export function getIntentColor(level: IntentLevel): string {
  switch (level) {
    case "hot": return "text-red-600 bg-red-50";
    case "warm": return "text-amber-600 bg-amber-50";
    case "cool": return "text-blue-500 bg-blue-50";
    case "cold": return "text-slate-500 bg-slate-100";
  }
}

export function getStatusColor(status: LeadStatus): string {
  switch (status) {
    case "new": return "text-slate-600 bg-slate-100";
    case "contacted": return "text-blue-600 bg-blue-50";
    case "qualified": return "text-terracotta bg-orange-50";
    case "proposal": return "text-amber-700 bg-amber-50";
    case "won": return "text-sage-dark bg-green-50";
    case "lost": return "text-red-600 bg-red-50";
  }
}

export function getScoreGrade(score: number): { label: string; color: string } {
  if (score >= 80) return { label: "A", color: "text-sage-dark bg-green-50 border-sage/30" };
  if (score >= 60) return { label: "B", color: "text-terracotta bg-orange-50 border-terracotta/30" };
  if (score >= 40) return { label: "C", color: "text-amber-700 bg-amber-50 border-amber-300/30" };
  if (score >= 20) return { label: "D", color: "text-blue-600 bg-blue-50 border-blue-300/30" };
  return { label: "F", color: "text-slate-500 bg-slate-100 border-slate-300/30" };
}
