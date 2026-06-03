export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  overview: string;
  problem: string;
  built: string[];
  technologies: string[];
  challenges: string[];
  demonstrates: string[];
};

export const projects: Project[] = [
  {
    slug: "aem-strategy-research-os",
    title: "AEM / Strategy Research OS",
    summary:
      "A research operating system concept for organizing strategy ideas, experiment history, validation notes, and decision records.",
    tags: ["Research workflow", "AI-assisted analysis", "Strategy validation"],
    overview:
      "A structured workspace for moving trading ideas from rough hypotheses into tracked research artifacts, validation workflows, and implementation-ready notes.",
    problem:
      "Strategy research can become scattered across notebooks, chats, spreadsheets, platform scripts, and screenshots, making it hard to preserve context or compare experiments honestly.",
    built: [
      "A central project structure for strategy notes, test plans, assumptions, and review checkpoints.",
      "A workflow model for documenting hypotheses, dataset choices, validation windows, and rejection criteria.",
      "Placeholders for AI-assisted research summaries while keeping final decisions auditable by a human reviewer.",
    ],
    technologies: [
      "Python",
      "pandas",
      "NumPy",
      "Market data workflows",
      "AI-assisted research tooling",
      "TODO: add exact storage and UI details",
    ],
    challenges: [
      "Keeping research notes useful without turning the system into busywork.",
      "Separating exploratory analysis from claims that are ready to drive implementation.",
      "Designing metadata that supports comparison without inventing false precision.",
    ],
    demonstrates: [
      "Research system design",
      "Quant workflow discipline",
      "Practical AI-assisted engineering",
      "Experiment traceability",
    ],
  },
  {
    slug: "futures-backtesting-framework",
    title: "Futures Backtesting Framework",
    summary:
      "A framework direction for testing futures strategies with clear assumptions, risk controls, and repeatable validation paths.",
    tags: ["Futures", "Backtesting", "Risk controls"],
    overview:
      "A backtesting framework focused on futures strategy validation, scenario review, and the mechanics needed to avoid misleading results.",
    problem:
      "Backtests are easy to make impressive and hard to make trustworthy. Futures strategies need attention to contract behavior, risk limits, execution assumptions, and time-based validation.",
    built: [
      "Reusable structure for defining strategy inputs, market sessions, risk controls, and evaluation windows.",
      "Hooks for comparing in-sample and out-of-sample behavior.",
      "TODO: add exact implementation details once the repository or screenshots are ready.",
    ],
    technologies: [
      "Python",
      "pandas",
      "NumPy",
      "Futures market data",
      "Strategy validation",
      "TODO: add exact broker/platform integrations",
    ],
    challenges: [
      "Preventing accidental lookahead bias and data leakage.",
      "Modeling assumptions clearly enough that results remain interpretable.",
      "Making risk controls first-class instead of an afterthought.",
    ],
    demonstrates: [
      "Quant engineering fundamentals",
      "Risk-aware system design",
      "Data pipeline thinking",
      "Backtest skepticism",
    ],
  },
  {
    slug: "pine-to-ninjatrader",
    title: "TradingView to NinjaTrader Strategy Porting",
    summary:
      "Porting strategy logic from Pine Script into NinjaTrader/C# while preserving behavior and surfacing platform differences.",
    tags: ["Pine Script", "NinjaTrader", "C#"],
    overview:
      "A translation and validation workflow for moving strategy concepts from TradingView/Pine Script into NinjaTrader implementation patterns.",
    problem:
      "Trading platforms differ in execution model, bar handling, order semantics, and state management, so a direct syntax translation is rarely enough.",
    built: [
      "A comparison workflow for matching signal logic across platforms.",
      "A checklist for state, session handling, inputs, and order behavior.",
      "TODO: add representative code snippets or before/after examples.",
    ],
    technologies: [
      "Pine Script",
      "NinjaTrader",
      "C#",
      "Strategy testing",
      "Platform API review",
    ],
    challenges: [
      "Preserving strategy intent across different runtime models.",
      "Finding subtle differences in indicator calculation and execution timing.",
      "Keeping translated code maintainable for future strategy changes.",
    ],
    demonstrates: [
      "Platform integration judgment",
      "C# implementation skill",
      "Trading system validation",
      "Attention to execution details",
    ],
  },
  {
    slug: "remote-trading-monitor",
    title: "Remote Trading Monitor",
    summary:
      "A monitoring concept for tracking trading system state, alerts, and operational health from a remote interface.",
    tags: ["Monitoring", "Automation", "Webhooks"],
    overview:
      "A lightweight operational monitor for surfacing trading system status, alerts, and action items without requiring constant manual checking.",
    problem:
      "Trading workflows need situational awareness: whether systems are running, alerts have fired, risk limits are approaching, or manual review is required.",
    built: [
      "A status model for trading operations and alert conditions.",
      "Webhook-oriented notification paths for system events.",
      "TODO: add exact channels, screenshots, and architecture diagram.",
    ],
    technologies: [
      "APIs",
      "Webhooks",
      "Automation agents",
      "TODO: add exact frontend/runtime stack",
    ],
    challenges: [
      "Distinguishing useful alerts from noise.",
      "Designing remote visibility without implying remote execution controls that are not present.",
      "Making status states clear under time pressure.",
    ],
    demonstrates: [
      "Operational tooling",
      "Risk-aware automation",
      "Systems integration",
      "Monitoring UX",
    ],
  },
  {
    slug: "c-tensor-library",
    title: "C Tensor / Neural Network Library",
    summary:
      "A low-level C project for tensor operations and neural network primitives with attention to memory and implementation mechanics.",
    tags: ["C", "Tensors", "Neural networks"],
    overview:
      "A systems programming project exploring tensor data structures, neural network building blocks, and the low-level mechanics behind higher-level AI tooling.",
    problem:
      "Modern ML libraries hide most of the memory layout, numerical, and API design decisions that make tensor computation work.",
    built: [
      "Tensor-oriented data structures and primitive operations.",
      "Neural network building block experiments.",
      "TODO: add implemented operation list, tests, and code repository link.",
    ],
    technologies: ["C", "Memory management", "Numerical computing", "Neural network primitives"],
    challenges: [
      "Designing clear APIs around manual memory management.",
      "Keeping shape handling and allocation behavior understandable.",
      "Balancing educational clarity with performance-minded implementation choices.",
    ],
    demonstrates: [
      "Low-level engineering",
      "AI infrastructure curiosity",
      "Memory management",
      "Numerical systems design",
    ],
  },
  {
    slug: "macro-event-risk-filter",
    title: "Macro Event Risk Filter",
    summary:
      "A risk-control concept for filtering trading activity around scheduled macro events and other high-volatility windows.",
    tags: ["Macro events", "Risk filter", "Trading operations"],
    overview:
      "A trading risk filter that models scheduled macro events as operational constraints for strategy evaluation or live decision support.",
    problem:
      "High-impact economic releases can change liquidity, volatility, and execution risk. Strategies need explicit rules for how those windows are handled.",
    built: [
      "A placeholder architecture for ingesting scheduled events and exposing risk windows to strategy logic.",
      "A decision model for allow, warn, reduce, or block states around event timing.",
      "TODO: add exact event source, screenshots, and validation notes.",
    ],
    technologies: [
      "Python",
      "Market calendars",
      "Risk controls",
      "Automation",
      "TODO: add exact data source",
    ],
    challenges: [
      "Representing event risk without overstating predictive power.",
      "Making filter behavior deterministic and easy to audit.",
      "Coordinating calendar data with strategy execution windows.",
    ],
    demonstrates: [
      "Risk-control thinking",
      "Operational modeling",
      "Quant workflow design",
      "Calendar-aware automation",
    ],
  },
];

export const featuredProjects = projects;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
