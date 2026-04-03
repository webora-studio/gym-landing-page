export const navItems = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
] as const;

export const metrics = [
  { label: "Workflows running", value: "12,480", change: "+18.4%" },
  { label: "Manual hours saved", value: "4,900", change: "+32.1%" },
  { label: "Response time", value: "0.8s", change: "-21%" },
] as const;

export const features = [
  {
    id: "automation",
    eyebrow: "Automation layer",
    title: "Workflow automation that keeps moving after your team signs off.",
    description:
      "Map triggers, branches, approvals, and actions into one continuous operating layer. NeuraFlow keeps repetitive handoffs from piling up across marketing, sales, support, and finance.",
    bullets: [
      "Conditional routing for repeatable business logic",
      "Human checkpoints where approvals still matter",
      "Multi-step orchestration across internal tools",
    ],
    preview: {
      label: "Workflow builder",
      items: [
        "Trigger: New demo request",
        "AI qualifies company profile",
        "CRM owner assigned by segment",
      ],
    },
  },
  {
    id: "decision",
    eyebrow: "Decision engine",
    title: "AI agents that make fast, narrow decisions inside real operating rules.",
    description:
      "Instead of vague prompts, define the exact inputs an agent can evaluate and the actions it can take. That keeps automation useful, explainable, and safe enough for daily operations.",
    bullets: [
      "Rule-aware agent prompts with confidence thresholds",
      "Escalation paths for ambiguous edge cases",
      "Transparent reasoning snapshots in every run log",
    ],
    preview: {
      label: "Decision policy",
      items: [
        "If lead score > 82 route to enterprise queue",
        "If invoice mismatch detected request human review",
        "If support intent is refund create finance ticket",
      ],
    },
  },
  {
    id: "integrations",
    eyebrow: "Connected systems",
    title: "Integrations that make automation feel native to the way teams already work.",
    description:
      "Connect the apps you already depend on, then let flows move data, trigger follow-ups, and keep records current without another operations layer stitched together by hand.",
    bullets: [
      "Bi-directional sync across CRM, inbox, and ticketing",
      "Low-friction connectors for common revenue workflows",
      "Reusable automation blocks for faster rollout",
    ],
    preview: {
      label: "Connected stack",
      items: ["Salesforce", "Slack", "HubSpot", "Notion", "Zendesk", "Stripe"],
    },
  },
  {
    id: "analytics",
    eyebrow: "Performance visibility",
    title: "Analytics that show what the system handled, where it hesitated, and what improved.",
    description:
      "See throughput, intervention rates, workflow health, and downstream outcomes in one view. The goal is not motion for its own sake. The goal is measurable operational lift.",
    bullets: [
      "Real-time run health and latency tracking",
      "Team-level intervention and approval metrics",
      "Outcome views tied back to workflow versions",
    ],
    preview: {
      label: "Weekly snapshot",
      items: ["98.2% run completion", "14.6k actions automated", "7 workflows pending review"],
    },
  },
] as const;

export const testimonials = [
  {
    quote:
      "NeuraFlow gave us one place to automate the work we kept handing between RevOps, support, and finance. The biggest win was clarity. Every automation finally had an owner and a measurable outcome.",
    name: "Elena Marsh",
    role: "VP Operations, Northline",
  },
  {
    quote:
      "Most automation tools feel either too technical or too shallow. NeuraFlow found the middle. Our team launched useful workflows in a week and kept refining them without engineering support.",
    name: "Marcus Lee",
    role: "Head of Growth, Polar Stack",
  },
  {
    quote:
      "The run logs changed how we trust automation. We can see why an agent acted, where it escalated, and what it touched. That made rollout a lot easier across the business.",
    name: "Talia Brooks",
    role: "COO, Crestview Labs",
  },
] as const;

export const pricing = [
  {
    name: "Starter",
    price: "$49",
    suffix: "/seat",
    description: "For teams launching their first high-volume automations.",
    points: ["Unlimited internal workflows", "5 app connections", "Basic run analytics"],
  },
  {
    name: "Growth",
    price: "$129",
    suffix: "/seat",
    description: "For cross-functional teams scaling automation across operations.",
    points: ["Advanced agent logic", "25 app connections", "Approval routing and audit logs"],
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    suffix: "",
    description: "For larger organizations with governance, security, and rollout needs.",
    points: ["Custom deployment support", "Priority onboarding", "Security reviews and SSO"],
  },
] as const;
