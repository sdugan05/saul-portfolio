export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Quant & Trading Systems",
    skills: [
      "Futures",
      "Backtesting",
      "Risk controls",
      "Pine Script",
      "NinjaTrader",
      "Strategy validation",
    ],
  },
  {
    title: "Data & AI",
    skills: [
      "Python",
      "pandas",
      "NumPy",
      "Market data pipelines",
      "AI-assisted research",
      "Overfit analysis",
    ],
  },
  {
    title: "Foundry / Product Systems",
    skills: [
      "Palantir Foundry",
      "Ontology modeling",
      "Workshop apps",
      "Operational workflows",
    ],
  },
  {
    title: "Systems Programming",
    skills: ["C", "C++", "C#", "APIs", "Webhooks", "Memory management", "Automation agents"],
  },
  {
    title: "Frontend / Web",
    skills: ["Astro", "TypeScript", "Tailwind", "GitHub", "Cloudflare Pages"],
  },
];
