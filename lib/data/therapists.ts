export type Therapist = {
  id: string;
  name: string;
  credentials: string;
  specialties: string[];
  bio: string;
  yearsExperience: number;
  approaches: string[];
  languages: string[];
  avatarGradient: string;
  availability: Array<{
    day: string;
    slots: string[];
  }>;
};

export const therapists: Therapist[] = [
  {
    id: "anderson",
    name: "Dr. Maya Anderson",
    credentials: "PsyD, Licensed Clinical Psychologist",
    specialties: ["Anxiety", "Stress", "Burnout Recovery"],
    bio: "Dr. Anderson blends CBT with mindfulness-based approaches to help high-achieving adults build sustainable emotional resilience.",
    yearsExperience: 11,
    approaches: ["CBT", "Mindfulness", "Acceptance Commitment Therapy"],
    languages: ["English", "Spanish"],
    avatarGradient:
      "linear-gradient(140deg, rgba(59,117,245,0.85), rgba(192,158,255,0.7))",
    availability: [
      { day: "Tuesday", slots: ["09:30", "14:00", "18:30"] },
      { day: "Thursday", slots: ["11:00", "16:00"] },
      { day: "Saturday", slots: ["10:00", "12:30"] }
    ]
  },
  {
    id: "rogers",
    name: "Alex Rogers, LMFT",
    credentials: "Licensed Marriage & Family Therapist",
    specialties: ["Relationships", "Communication", "Queer Affirming"],
    bio: "Alex creates affirming spaces for couples and LGBTQIA+ clients to rebuild trust and craft more intentional relationships.",
    yearsExperience: 8,
    approaches: ["Emotion-Focused Therapy", "Narrative Therapy"],
    languages: ["English"],
    avatarGradient:
      "linear-gradient(160deg, rgba(56,189,248,0.9), rgba(59,130,246,0.65))",
    availability: [
      { day: "Monday", slots: ["13:00", "15:00", "17:00"] },
      { day: "Wednesday", slots: ["09:00", "11:00", "19:00"] },
      { day: "Friday", slots: ["10:00", "12:00"] }
    ]
  },
  {
    id: "nguyen",
    name: "Thao Nguyen, LCSW",
    credentials: "Licensed Clinical Social Worker",
    specialties: ["Trauma Recovery", "Life Transitions", "Identity"],
    bio: "Thao supports clients navigating complex trauma and life transitions with somatic awareness and culturally responsive care.",
    yearsExperience: 9,
    approaches: ["EMDR", "Somatic Experiencing", "Parts Work"],
    languages: ["English", "Vietnamese"],
    avatarGradient:
      "linear-gradient(150deg, rgba(110,231,183,0.9), rgba(52,211,153,0.65))",
    availability: [
      { day: "Tuesday", slots: ["18:00", "20:00"] },
      { day: "Thursday", slots: ["08:30", "13:30", "19:30"] },
      { day: "Sunday", slots: ["09:30", "12:00"] }
    ]
  }
];
