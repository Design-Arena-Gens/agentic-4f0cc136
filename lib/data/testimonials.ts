export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  progress: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Nine months in, my anxiety symptoms are down 63%. The check-ins and shared action plans made it effortless to stay accountable.",
    name: "Elena Ruiz",
    role: "Product Design Lead",
    progress: "Mood stability increased to 4.3/5"
  },
  {
    quote:
      "We rebuilt our relationship with practical rituals grounded in evidence. Virtual sessions remove every excuse.",
    name: "Marcus & Aiden",
    role: "Partners • 3 years together",
    progress: "Communication clarity score up 2x"
  },
  {
    quote:
      "The blend of somatic work and journaling prompts helped me process grief while launching a new venture.",
    name: "Priya Patel",
    role: "Founder, Seed Stage Startup",
    progress: "Sleep quality improved 41%"
  },
  {
    quote:
      "I feel seen as a queer person of color. Therapy finally feels expansive, not prescriptive.",
    name: "Imani Johnson",
    role: "Creative Director",
    progress: "Self-compassion score up 38%"
  }
];
