export const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Programs", href: "#programs" },
  { label: "Spaces", href: "#spaces" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroStats = [
  { value: "24/7", label: "Member access" },
  { value: "14", label: "Expert coaches" },
  { value: "500+", label: "Active members" },
] as const;

export const heroImages = {
  primary: "/gym/real-hero-2.jpg",
  secondary: "/gym/real-athlete-3.jpg",
  tertiary: "/gym/real-gymfloor-3.jpg",
} as const;

export const experiencePanels = [
  {
    title: "Arrival Lounge",
    body: "A transition space designed to help you leave the day behind and step into your peak performance state with focused lighting and natural materials.",
    image: "/gym/real-gymfloor-3.jpg",
  },
  {
    title: "Strength Floor",
    body: "Elite performance equipment, open circulation, and enough breathing room for your training to feel focused, powerful, and uninterrupted.",
    image: "/gym/real-hero-2.jpg",
  },
  {
    title: "Recovery Suite",
    body: "Regenerate faster with an integrated suite of saunas, cold exposure, and guided breathwork built into your weekly club rhythm.",
    image: "/gym/real-treadmills-2.jpg",
  },
] as const;

export const programs = [
  {
    name: "Strength Residency",
    description:
      "Advanced strength coaching for results-driven members who want cleaner movement, stronger mechanics, and a disciplined performance rhythm.",
    detail: "3 coached sessions each week",
    image: "/gym/real-athlete-3.jpg",
  },
  {
    name: "Conditioning Lab",
    description:
      "High-output athletic conditioning built for professionals who want maximum intensity without chaotic programming or generic circuits.",
    detail: "45-minute focused format",
    image: "/gym/real-hero-2.jpg",
  },
  {
    name: "Private Performance",
    description:
      "One-to-one elite coaching for physique, posture, and complete performance planning tailored around your high-stakes schedule.",
    detail: "Bespoke programming and tracking",
    image: "/gym/real-treadmills-2.jpg",
  },
  {
    name: "Recovery Club",
    description:
      "A complete wellness protocol including mobility, sauna, and cold exposure to ensure your body is ready to train harder and more consistently.",
    detail: "Integrated recovery access",
    image: "/gym/real-gymfloor-3.jpg",
  },
] as const;

export const spaceGallery = [
  "/gym/real-hero-2.jpg",
  "/gym/real-athlete-3.jpg",
  "/gym/real-treadmills-2.jpg",
  "/gym/real-gymfloor-3.jpg",
] as const;

export const testimonials = [
  {
    quote:
      "I joined for the atmosphere, but stayed because the coaching finally made me consistent. Forge House feels premium without losing the discipline that actually gets results.",
    name: "Mira Shah",
    role: "Founder, product studio",
  },
  {
    quote:
      "This is the first gym that made me want to show up four mornings a week. Everything feels calm, focused, and built for people who take their health seriously.",
    name: "Daniel Moore",
    role: "Managing partner",
  },
  {
    quote:
      "The recovery spaces, the coaches, and the way the sessions are structured make it easy to stay on track. It feels less like joining a gym and more like joining a better routine.",
    name: "Anika Rao",
    role: "Creative director",
  },
] as const;

export const membershipTiers = [
  {
    name: "Core",
    price: "$180",
    cadence: "/month",
    description: "Premium access for members who prioritize a world-class training environment and a stronger weekly routine.",
    points: ["Unlimited gym access", "2 coached classes weekly", "Recovery lounge access"],
  },
  {
    name: "Signature",
    price: "$320",
    cadence: "/month",
    description: "Our most comprehensive membership for members who want elite coaching, accountability, and visible results.",
    points: ["Unlimited classes", "Monthly coach review", "Priority booking and recovery"],
    featured: true,
  },
  {
    name: "Private",
    price: "Custom",
    cadence: "",
    description: "A high-touch bespoke option for clients who want personal performance coaching, schedule planning, and fully tailored results.",
    points: ["Private coaching", "Nutrition guidance", "Concierge scheduling"],
  },
] as const;
