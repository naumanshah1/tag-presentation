import {
  Activity,
  AlertTriangle,
  ArrowLeftRight,
  BarChart3,
  Building2,
  CalendarRange,
  FolderOpen,
  GitBranch,
  Globe,
  Grid3x3,
  LayoutDashboard,
  LayoutGrid,
  Map,
  MessageCircle,
  Microscope,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

export type SlideId =
  | "overview"
  | "challenge"
  | "roles"
  | "access"
  | "dashboards"
  | "workflow"
  | "planning"
  | "content"
  | "essentials"
  | "analytics"
  | "deep-dive"
  | "goals"
  | "tago"
  | "audit"
  | "admin"
  | "organisations"
  | "websites"
  | "before-now"
  | "roadmap"
  | "thanks";

export type SlideMeta = {
  id: SlideId;
  group: "Start" | "Platform" | "Insights" | "Governance" | "Impact";
  label: string; // sidebar + top bar
  blurb: string; // one line used on the Overview cards
  icon: LucideIcon;
};

/** Order here = order of the presentation. Edit freely. */
export const SLIDES: SlideMeta[] = [
  { id: "overview", group: "Start", label: "Overview", blurb: "Everything t@g does, on one screen", icon: LayoutGrid },
  { id: "challenge", group: "Start", label: "The Challenge", blurb: "Where our digital presence stood before t@g", icon: AlertTriangle },

  { id: "roles", group: "Platform", label: "One Login, Four Roles", blurb: "Every person sees exactly what their role needs", icon: Users },
  { id: "access", group: "Platform", label: "Feature Access Map", blurb: "Every t@g feature, mapped to every role", icon: Grid3x3 },
  { id: "dashboards", group: "Platform", label: "Role Dashboards", blurb: "Your work and your numbers the moment you log in", icon: LayoutDashboard },
  { id: "workflow", group: "Platform", label: "Request-to-Post Workflow", blurb: "From idea to published post, with approval gates", icon: GitBranch },
  { id: "planning", group: "Platform", label: "Planning & Publishing", blurb: "Queues, planner and calendar keep work moving", icon: CalendarRange },
  { id: "content", group: "Platform", label: "Content Hub", blurb: "One source of truth for every approved asset", icon: FolderOpen },
  { id: "essentials", group: "Platform", label: "Everyday Essentials", blurb: "People, notifications, profiles and access control", icon: Settings2 },

  { id: "analytics", group: "Insights", label: "Social Analytics", blurb: "Four platforms, eight organisations, one view", icon: BarChart3 },
  { id: "deep-dive", group: "Insights", label: "Analytics Deep Dive", blurb: "Per-college detail, comparisons and data imports", icon: Microscope },
  { id: "goals", group: "Insights", label: "Goals & Reports", blurb: "Growth goals, approval analytics and reports", icon: Target },
  { id: "tago", group: "Insights", label: "Tago AI", blurb: "An analyst built into every dashboard", icon: Sparkles },
  { id: "audit", group: "Insights", label: "Audit Radar", blurb: "Every action, by every person, on one timeline", icon: Activity },

  { id: "admin", group: "Governance", label: "Admin Control Centre", blurb: "Users, logs, registers and settings for the group", icon: ShieldCheck },
  { id: "organisations", group: "Governance", label: "Multi-Organisation", blurb: "Eight institutions, one governance layer", icon: Building2 },
  { id: "websites", group: "Governance", label: "Websites & Brand", blurb: "Dynamic sites and one brand book, in-house", icon: Globe },

  { id: "before-now", group: "Impact", label: "Before vs Now", blurb: "The transformation at a glance", icon: ArrowLeftRight },
  { id: "roadmap", group: "Impact", label: "Next 90 Days", blurb: "October to December 2026", icon: Map },
  { id: "thanks", group: "Impact", label: "Thank You", blurb: "Questions & discussion", icon: MessageCircle },
];

/** Every slide component receives this. */
export type SlideProps = { go: (id: SlideId) => void };

export const GROUPS = ["Start", "Platform", "Insights", "Governance", "Impact"] as const;
