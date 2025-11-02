export type Resource = {
  id: string;
  title: string;
  description: string;
  duration: string;
  focus: string;
  url: string;
};

export const resources: Resource[] = [
  {
    id: "grounding",
    title: "5 Minute Evidence-Based Grounding Practice",
    description:
      "Interrupt panic spirals with a guided sensory reset grounded in polyvagal theory.",
    duration: "Audio • 5 min",
    focus: "Immediate Relief",
    url: "#"
  },
  {
    id: "burnout-reset",
    title: "Burnout Reset Toolkit",
    description:
      "A four-week plan combining micro-habits, narrative reframing, and nervous system care.",
    duration: "Workbook • 4 weeks",
    focus: "Resilience",
    url: "#"
  },
  {
    id: "relationship-health",
    title: "Weekly Rituals for Relationship Health",
    description:
      "12 intentional rituals for building intimacy, clarity, and repair in modern partnerships.",
    duration: "Guide • 15 pages",
    focus: "Connection",
    url: "#"
  }
];
