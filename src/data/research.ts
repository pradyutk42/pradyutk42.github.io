// Your research themes. Each one shows a short summary on the landing page
// and a full description on /research (deep-linked via #slug).
//
// To add a project: copy a block, change the fields, done. No other file to touch.

export interface ResearchTheme {
  slug: string;          // url anchor on /research, e.g. #malaria-abm
  title: string;
  summary: string;       // 1–2 sentences, shown on the landing page
  detail: string;        // full paragraph(s), shown on /research
  tags: string[];
  status?: string;       // optional, e.g. "active", "in review", "early"
}

export const research: ResearchTheme[] = [
  {
    slug: "malaria-abm",
    title: "Agent-Based Modeling of Malaria Spread",
    summary:
      "Simulating transmission, antigenic diversity, and drug resistance in malaria using network dynamics and immunological feedback loops.",
    detail:
      "Malaria's persistence is a story about variation — in the parasite's surface antigens, " +
      "in host immune memory, and in the patchwork of human contact networks that move infections " +
      "around. I build agent-based models that track these layers explicitly, so that population-level " +
      "patterns (seasonal peaks, resistance sweeps, the slow erosion of intervention efficacy) emerge " +
      "from individual-level rules rather than being assumed. The goal is a model you can interrogate: " +
      "pull a lever on drug deployment, watch how resistance and transmission respond, and ask whether " +
      "the trade-off was worth it.",
    tags: ["agent-based models", "antigenic diversity", "drug resistance"],
    status: "active",
  },
  {
    slug: "cross-immunity",
    title: "Cross-Immunity in Multi-Strain Systems",
    summary:
      "Exploring the ecological and evolutionary consequences of partial immunity across strains, using dynamical systems and theoretical modelling.",
    detail:
      "When pathogens come in many strains and immunity to one offers partial protection against another, " +
      "the dynamics get strange — coexistence, cyclical replacement, sudden competitive exclusion. I use " +
      "dynamical-systems models to map when partial cross-immunity stabilizes a community of strains and " +
      "when it tips the system into oscillation or collapse. The theory here speaks to flu, dengue, malaria, " +
      "and any system where 'immune' is a matter of degree rather than a switch.",
    tags: ["multi-strain dynamics", "ODEs", "theory"],
    status: "active",
  },
];
