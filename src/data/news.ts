// Recent updates, newest first. The landing page shows the top few.
// Add a line whenever something happens — a talk, a paper, an award, a new post.
// This is the cheapest, highest-signal thing on an academic site: keep it current.

export interface NewsItem {
  date: string;          // ISO date, e.g. "2026-04-12"
  text: string;
  href?: string;         // optional link
}

export const news: NewsItem[] = [
  // TODO: confirm date + wording. Photos are already in public/photos/eeid_2026/.
  // If you gave a talk or poster, say so — e.g. "Presented a poster on X at EEID 2026."
  { date: "2026-06-01", text: "Attended EEID 2026." },
  { date: "2026-03-18", text: "New post: Why I do what I do — with an interactive SEIR simulator.", href: "/blog/why-i-do-what-i-do" },
  { date: "2026-02-02", text: "Started the cross-immunity project — first results on strain coexistence." },
  { date: "2025-09-01", text: "Joined the Ecology & Evolutionary Biology PhD program at Purdue." },
];
