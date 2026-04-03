export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const services = [
  {
    title: "Residential Construction",
    description:
      "Private villas, premium residences, and multi-family homes delivered with rigorous planning and finish quality.",
    caption: "Spaces for living with durability, calm, and architectural clarity built in from the start.",
  },
  {
    title: "Commercial Construction",
    description:
      "Office, mixed-use, and business environments designed to perform beautifully under daily use.",
    caption: "Operationally efficient buildings shaped to support brand presence, circulation, and long-term use.",
  },
  {
    title: "Interior Construction",
    description:
      "High-end interior execution with cohesive detailing across lighting, finishes, and custom-built elements.",
    caption: "Material alignment, custom fabrication, and integrated finishing brought together as one system.",
  },
  {
    title: "Renovation Services",
    description:
      "Adaptive renovation that upgrades aging assets without losing the character or purpose of the space.",
    caption: "Transformations that increase value while protecting structure, heritage, and daily functionality.",
  },
  {
    title: "Project Planning",
    description:
      "Clear phasing, cost visibility, procurement alignment, and practical build sequencing from day one.",
    caption: "The strategic layer that keeps budgets controlled and milestones realistic before execution begins.",
  },
  {
    title: "Structural Design",
    description:
      "Engineering-led design systems built for resilience, efficiency, and architectural integrity.",
    caption: "Robust structural thinking that supports bold architecture without compromising delivery confidence.",
  },
] as const;

export const projects = [
  {
    title: "Modern Villa",
    tag: "Residential",
    location: "Bengaluru",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80",
    summary:
      "A monolithic hillside home shaped around light, thermal comfort, and restrained material contrast.",
    details: [
      "18,400 sq ft turnkey execution",
      "Exposed concrete, natural oak, and panoramic glazing",
      "Integrated landscape and passive cooling strategy",
    ],
  },
  {
    title: "Corporate Office",
    tag: "Commercial",
    location: "Hyderabad",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
    summary:
      "A workplace campus built for agility, daylight, and executive-grade hospitality.",
    details: [
      "Nine-floor phased build with live coordination",
      "Facade and MEP integration across all levels",
      "Delivered ahead of occupancy deadline",
    ],
  },
  {
    title: "Luxury Apartment",
    tag: "Residential",
    location: "Mumbai",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80",
    summary:
      "A refined residential tower with hotel-grade arrival spaces and durable premium detailing.",
    details: [
      "42 residences with bespoke amenity spaces",
      "Stone, glass, and brushed metal palette",
      "Sequential quality reviews across all trades",
    ],
  },
  {
    title: "Retail Store",
    tag: "Retail",
    location: "Chennai",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
    summary:
      "A flagship retail environment built to feel tactile, elegant, and resilient under high footfall.",
    details: [
      "Fast-track custom fit-out with display zones",
      "Precision finish package and integrated lighting",
      "Timed handover for brand launch window",
    ],
  },
  {
    title: "Industrial Building",
    tag: "Industrial",
    location: "Pune",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    summary:
      "A high-efficiency industrial shell with operational planning embedded into the build logic.",
    details: [
      "78,000 sq ft steel and concrete structure",
      "Logistics-first circulation and safety planning",
      "Zero-delay milestone closeout and commissioning",
    ],
  },
] as const;

export const processSteps = [
  {
    id: "01",
    title: "Planning",
    text: "We establish scope, budget, sequencing, and build logic before execution begins.",
  },
  {
    id: "02",
    title: "Design",
    text: "Architectural ambition and on-site practicality are aligned into one coordinated path.",
  },
  {
    id: "03",
    title: "Construction",
    text: "Execution is led through precise supervision, disciplined procurement, and transparent reporting.",
  },
  {
    id: "04",
    title: "Delivery",
    text: "Final inspections, closeout detailing, and handover are completed with the same care as the build itself.",
  },
] as const;

export const whyChooseUs = [
  "10+ years experience",
  "Modern technology",
  "On time delivery",
  "Quality materials",
  "Professional team",
] as const;

export const stats = [
  { value: 120, suffix: "+", label: "Projects completed" },
  { value: 15, suffix: "+", label: "Expert engineers" },
  { value: 10, suffix: "+", label: "Years experience" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
] as const;

export const testimonials = [
  {
    quote:
      "Their team translated ambition into a build process that felt calm, deliberate, and exceptionally controlled.",
    name: "Arjun Mehta",
    role: "Director, Meridian Office Group",
  },
  {
    quote:
      "The detailing, schedule discipline, and communication quality made this feel like a true premium delivery partner.",
    name: "Naina Kapoor",
    role: "Founder, Atelier Residences",
  },
  {
    quote:
      "They understood the architectural brief and the business reality behind it. That balance is rare.",
    name: "Rohit Sharma",
    role: "Operations Head, Northline Retail",
  },
] as const;

export const homeChapters = [
  {
    index: "01",
    title: "Ground every project in strategy.",
    text: "We begin by aligning ambition, feasibility, budget, and sequencing so the build has a clear backbone before design decisions accelerate.",
    image:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    index: "02",
    title: "Shape architecture through build intelligence.",
    text: "Design development is coordinated with structural systems, material realities, and delivery conditions to protect quality from concept through execution.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
  },
  {
    index: "03",
    title: "Deliver with craft and control.",
    text: "On site, we focus on sequencing, supervision, and finish quality so the final experience feels cohesive, calm, and built to endure.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export const serviceStories = [
  {
    title: "Planning that protects design quality",
    text: "Better buildings come from early decisions made with enough technical depth to support design, procurement, and execution all at once.",
    image:
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Execution systems that reduce friction",
    text: "We create delivery frameworks that make complexity readable, with milestone visibility, coordinated trades, and fewer late-stage surprises.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Handover that feels finished",
    text: "Closeout is treated as part of design quality, not an afterthought. That means cleaner detailing, tighter punch lists, and stronger client confidence.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export const aboutValues = [
  {
    title: "Trust is built in the process, not the pitch.",
    text: "Clients trust us because schedules are clear, risks are surfaced early, and the delivery path stays legible from kickoff to handover.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Precision comes from restraint.",
    text: "We prefer fewer promises, sharper systems, and stronger execution. That discipline shows up in every detail clients experience.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Modern construction should feel human.",
    text: "Behind the structure, we are building places for teams, families, and communities. Function and atmosphere need to coexist.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export const contactDetails = [
  {
    label: "Email",
    value: "hello@axiomconstruct.com",
  },
  {
    label: "Phone",
    value: "+91 98765 43210",
  },
  {
    label: "Studio",
    value: "12 Richmond Road, Bengaluru",
  },
] as const;
