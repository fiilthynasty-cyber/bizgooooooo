    signals: [
      { type: "Email", description: "Opened 1 email", weight: 3, timestamp: "5d ago" },
    ],
    tags: ["tech", "startup"],
  },
  {
    id: "L007",
    name: "Lisa Nakamura",
    email: "l.nakamura@bigco.jp",
    company: "BigCo Japan",
    title: "VP Engineering",
    intentScore: 88,
    intentLevel: "hot",
    status: "qualified",
    source: "referral",
    lastActivity: "30 min ago",
    createdAt: "2026-02-08",
    signals: [
      { type: "Demo", description: "Completed product trial", weight: 35, timestamp: "30m ago" },
      { type: "Page Visit", description: "Viewed API docs extensively", weight: 20, timestamp: "1d ago" },
      { type: "Content", description: "Downloaded integration guide", weight: 15, timestamp: "2d ago" },
    ],
    tags: ["enterprise", "international", "technical"],
  },
  {
    id: "L008",
    name: "Carlos Mendez",
    email: "carlos@latamgrowth.co",
    company: "LATAM Growth",
    title: "Marketing Director",
    intentScore: 56,
    intentLevel: "cool",
    status: "contacted",
    source: "paid",
    lastActivity: "4 days ago",
    createdAt: "2026-02-22",
    signals: [
      { type: "Page Visit", description: "Visited homepage twice", weight: 5, timestamp: "4d ago" },
      { type: "Content", description: "Read comparison article", weight: 10, timestamp: "5d ago" },
    ],
    tags: ["mid-market", "international"],
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

export const weeklyLeadData = [
  { day: "Mon", leads: 42, qualified: 18, converted: 8 },
  { day: "Tue", leads: 56, qualified: 24, converted: 11 },
  { day: "Wed", leads: 38, qualified: 15, converted: 6 },
  { day: "Thu", leads: 67, qualified: 31, converted: 14 },
  { day: "Fri", leads: 52, qualified: 22, converted: 10 },
  { day: "Sat", leads: 23, qualified: 9, converted: 4 },
  { day: "Sun", leads: 18, qualified: 7, converted: 3 },
];

export const monthlyTrendData = [
  { month: "Sep", leads: 1820, subscribers: 9200, score: 58 },
  { month: "Oct", leads: 2100, subscribers: 10400, score: 61 },
  { month: "Nov", leads: 1950, subscribers: 11100, score: 63 },
  { month: "Dec", leads: 2340, subscribers: 12300, score: 65 },
  { month: "Jan", leads: 2580, subscribers: 13100, score: 66 },
  { month: "Feb", leads: 2847, subscribers: 14392, score: 68 },
];

export const sourceBreakdown = [
  { source: "Organic", count: 1024, percentage: 36, color: "#7C9A82" },
  { source: "Paid", count: 712, percentage: 25, color: "#C4704B" },
  { source: "Referral", count: 542, percentage: 19, color: "#B8A089" },
  { source: "Social", count: 341, percentage: 12, color: "#2C1810" },
  { source: "Email", count: 228, percentage: 8, color: "#5A8A64" },
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
