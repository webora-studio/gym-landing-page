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
    title: "Arrival lounge",
    body: "Soft lighting, quiet acoustics, natural materials, and a calmer entry sequence that makes the club feel intentional from the first step.",
    image: "/gym/real-gymfloor-3.jpg",
  },
  {
    title: "Strength floor",
    body: "Performance equipment, open circulation, and enough breathing room for training to feel focused rather than crowded.",
    image: "/gym/real-hero-2.jpg",
  },
  {
    title: "Recovery rooms",
    body: "Sauna, cold exposure, breathwork, and reset spaces built into the weekly rhythm of the club instead of tacked on afterward.",
    image: "/gym/real-treadmills-2.jpg",
  },
] as const;

export const programs = [
  {
    name: "Strength Residency",
    description:
      "Long-horizon strength coaching for members who want cleaner movement, stronger mechanics, and a disciplined weekly rhythm.",
    detail: "3 coached sessions each week",
    image: "/gym/real-athlete-3.jpg",
  },
  {
    name: "Conditioning Lab",
    description:
      "High-output conditioning built for professionals who want athletic intensity without chaotic programming or generic circuits.",
    detail: "45-minute focused format",
    image: "/gym/real-hero-2.jpg",
  },
  {
    name: "Private Performance",
    description:
      "One-to-one coaching for physique, posture, injury-aware training, and complete performance planning around your real schedule.",
    detail: "Bespoke programming and tracking",
    image: "/gym/real-treadmills-2.jpg",
  },
  {
    name: "Recovery Club",
    description:
      "Mobility, sauna, cold exposure, and guided recovery protocols that make the body feel supported enough to train harder and more consistently.",
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
    description: "For members who want a beautiful space, flexible access, and a stronger weekly routine.",
    points: ["Unlimited gym access", "2 coached classes weekly", "Recovery lounge access"],
  },
  {
    name: "Signature",
    price: "$320",
    cadence: "/month",
    description: "The most popular membership for members who want coaching, accountability, and visible results.",
    points: ["Unlimited classes", "Monthly coach review", "Priority booking and recovery"],
    featured: true,
  },
  {
    name: "Private",
    price: "Custom",
    cadence: "",
    description: "A high-touch option for clients who want personal coaching, schedule planning, and fully tailored progress.",
    points: ["Private coaching", "Nutrition guidance", "Concierge scheduling"],
  },
] as const;
