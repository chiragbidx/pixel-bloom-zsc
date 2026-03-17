// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ─── Sponsors ───────────────────────────────────────────────────────────────
export type SponsorItem = { icon: string; name: string };
export type SponsorsContent = {
  heading: string;
  items: SponsorItem[];
};

// ─── Benefits ───────────────────────────────────────────────────────────────
export type BenefitItem = { icon: string; title: string; description: string };
export type BenefitsContent = {
  eyebrow: string;
  heading: string;
  description: string;
  items: BenefitItem[];
};

// ─── Feature Grid ───────────────────────────────────────────────────────────
export type FeatureItem = { icon: string; title: string; description: string };
export type FeaturesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: FeatureItem[];
};

// ─── Services ───────────────────────────────────────────────────────────────
export type ServiceItem = { title: string; description: string; pro: boolean };
export type ServicesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: ServiceItem[];
};

// ─── Testimonials ───────────────────────────────────────────────────────────
export type TestimonialItem = {
  image: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
};
export type TestimonialsContent = {
  eyebrow: string;
  heading: string;
  reviews: TestimonialItem[];
};

// ─── Team ───────────────────────────────────────────────────────────────────
export type SocialLink = { name: string; url: string };
export type TeamMember = {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialLink[];
};
export type TeamContent = {
  eyebrow: string;
  heading: string;
  members: TeamMember[];
};

// ─── Pricing ────────────────────────────────────────────────────────────────
export type PricingPlan = {
  title: string;
  popular: boolean;
  price: number;
  description: string;
  buttonText: string;
  benefits: string[];
};
export type PricingContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  priceSuffix: string;
  plans: PricingPlan[];
};

// ─── Contact ────────────────────────────────────────────────────────────────
export type ContactInfoBlock = { label: string; value: string | string[] };
export type ContactContent = {
  eyebrow: string;
  heading: string;
  description: string;
  mailtoAddress: string;
  info: {
    address: ContactInfoBlock;
    phone: ContactInfoBlock;
    email: ContactInfoBlock;
    hours: ContactInfoBlock;
  };
  formSubjects: string[];
  formSubmitLabel: string;
};

// ─── FAQ ────────────────────────────────────────────────────────────────────
export type FaqItem = { question: string; answer: string };
export type FaqContent = {
  eyebrow: string;
  heading: string;
  items: FaqItem[];
};

// ─── Footer ─────────────────────────────────────────────────────────────────
export type FooterLink = { label: string; href: string };
export type FooterColumn = { heading: string; links: FooterLink[] };
export type FooterContent = {
  brandName: string;
  columns: FooterColumn[];
  copyright: string;
  attribution: { label: string; href: string };
};

// ─── Navbar ─────────────────────────────────────────────────────────────────
export type NavRoute = { href: string; label: string };
export type NavFeature = { title: string; description: string };
export type NavbarContent = {
  brandName: string;
  routes: NavRoute[];
  featureDropdownLabel: string;
  featureImage: { src: string; alt: string };
  features: NavFeature[];
  signInLabel: string;
  signUpLabel: string;
  dashboardLabel: string;
  githubLink: { href: string; ariaLabel: string };
};

// ─── Root ───────────────────────────────────────────────────────────────────
export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

// ─── Defaults ───────────────────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Launch",
    badgeOuter: "PulseCRM starter is ready",
    titleBefore: "Accelerate your",
    titleHighlight: "CRM",
    titleAfter: "build with PulseCRM",
    subtitle:
      "PulseCRM is a minimal Next.js 16 App Router starter (React 19, TypeScript 5) with Tailwind-ready styling, dev supervision support, and a clean landing page—no auth or database included (yet)! Begin your CRM journey here.",
    primaryCta: { label: "Get Started", href: "#pricing" },
    secondaryCta: { label: "Learn More", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "PulseCRM dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Stack Foundation",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why PulseCRM",
    heading: "A launchpad for internal CRM tools",
    description: "PulseCRM is built for devs and teams who want to ship a CRM UI—quickly, with confidence, and room for extension.",
    items: [
      {
        icon: "Blocks",
        title: "Ready for Extension",
        description: "Starter file structure makes it easy to add database, auth, APIs, or your dashboard as you grow.",
      },
      {
        icon: "LineChart",
        title: "Lightning Fast Start",
        description: "Get a live landing page, theming, design system, and starter config in <1 hour.",
      },
      {
        icon: "Wallet",
        title: "Zero Bloat",
        description: "No vendor lock-in, no unused backend—just Next.js, Tailwind, and essentials.",
      },
      {
        icon: "Sparkle",
        title: "Production Styling",
        description: "Visually modern, responsive, and includes premium UI primitives from shadcn/ui.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "PulseCRM Next.js Starter Includes",
    subtitle:
      "Production-grade structure—landing page, ready-to-enable dashboard routes, and extensible API foundations. Bring your own database and auth.",
    items: [
      { icon: "TabletSmartphone", title: "Mobile Responsive", description: "Looks great on any device, no extra code needed." },
      { icon: "BadgeCheck", title: "Production-Grade Patterns", description: "Follows Next.js best practices for App Router and theming." },
      { icon: "Goal", title: "Designed for CRM Workflows", description: "Structure makes adding contacts, leads, or deals quick." },
      { icon: "PictureInPicture", title: "Shadcn & Tailwind UI", description: "Batteries-included visual starter—edit as you want." },
      { icon: "MousePointerClick", title: "Deploy-Ready", description: "Railway (dev) and Vercel (prod) native." },
      { icon: "Newspaper", title: "Docs-Friendly", description: "Simple, readable codebase—great for onboarding." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "What You Get",
    subtitle:
      "PulseCRM is a focused baseline for any internal CRM tool or minimal SaaS offering.",
    items: [
      { title: "Next.js 16 App Router", description: "Modern file-based routing, server-first by default.", pro: false },
      { title: "TypeScript 5", description: "Strict types, DX improvements.", pro: false },
      { title: "TailwindCSS Ready", description: "All global + shadcn keyframes included.", pro: false },
      { title: "Component System", description: "shadcn/ui primitives with Nova theming.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Voices",
    heading: "Why teams use PulseCRM",
    reviews: [
      { image: "/demo-img.jpg", name: "Rayna Kapoor", role: "Infra Lead, DeltaCRM", comment: "Spun up a new CRM onboarding UI for internal ops in a day. Clean, themeable, no drama.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Jules Renner", role: "Frontend Dev, Thermo Sola", comment: "As a TypeScript purist, I love how solid the structure is. Was deploying live within an hour.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Diego Marquez", role: "Product Owner, PrismLogix", comment: "Finally, a starter that doesn't bloat or force random backend logic. Hit the ground running.", rating: 4.8 },
      { image: "/demo-img.jpg", name: "Amelia Zane", role: "Founder, CubeTrack", comment: "Our Vercel deploy was frictionless. It's a great base if you want to roll your own auth and DB.", rating: 5.0 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Owner & Team",
    heading: "Meet the PulseCRM Creator",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder & Engineer"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/chiragdodiya" },
          { name: "Github", url: "https://github.com/chiragdodiya" },
        ],
      },
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Open-Source Launch Pricing",
    subtitle: "PulseCRM is free, MIT-licensed—no CC required, no strings attached.",
    priceSuffix: "/month",
    plans: [
      {
        title: "PulseCRM Core",
        popular: true,
        price: 0,
        description: "Starter template, no locked features.",
        buttonText: "Download",
        benefits: ["Open source codebase", "Ready for extension", "Fast landing page", "Developer supervision"],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Contact Chirag Dodiya",
    description:
      "Questions, feedback, or want to collaborate? Reach out to Chirag for support or custom CRM extensions.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote-first • Mumbai, India" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "chirag@bidx.ai" },
      hours: { label: "Hours", value: ["Flexible", "Ping anytime"] },
    },
    formSubjects: ["PulseCRM Inquiry", "Support or Issue", "Custom Feature"],
    formSubmitLabel: "Send",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "PulseCRM Questions",
    items: [
      { question: "Is PulseCRM open source and free?", answer: "Yes. It's MIT-licensed—no sign-up, just download and build." },
      { question: "Does PulseCRM have auth/database features?", answer: "Not yet. PulseCRM gives you a clean slate—bring your own backend and plug it in." },
      { question: "Can I deploy on Vercel/Railway?", answer: "Yes. The template is built to deploy easily on popular platforms." },
      { question: "Is this production styled?", answer: "Yes. All components and sections are visually polished and responsive." },
      { question: "How do I extend it for real CRM workflows?", answer: "Start by adding your database models, APIs, and dashboard logic under app/ and lib/." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "PulseCRM",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
          { label: "Github", href: "https://github.com/chiragdodiya" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
          { label: "Docs", href: "https://nextjs.org/docs" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com/chiragdodiya" },
          { label: "LinkedIn", href: "https://linkedin.com/in/chiragdodiya" },
          { label: "X", href: "https://x.com" },
        ],
      },
    ],
    copyright: "\u00a9 2026 PulseCRM Starter.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "PulseCRM",
    routes: [
      { href: "/#testimonials", label: "Voices" },
      { href: "/#team", label: "Team" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "PulseCRM preview" },
    features: [
      { title: "Extensible Structure", description: "Bring your own database, logic, or dashboard." },
      { title: "Shadcn & Tailwind", description: "Flexible, ready-to-edit theming—dark mode included." },
      { title: "Developer Tools", description: "Scripts for dev supervision and fast feedback." },
    ],
    signInLabel: "Sign in",
    signUpLabel: "Sign up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com/chiragdodiya", ariaLabel: "View on GitHub" },
  },
};

export function getHomeContent(): HomeContent {
  return defaultHomeContent;
}