// Blog post index. The landing page shows the most recent couple;
// /blog shows them all.
//
// Two ways to add a post:
//   1. Interactive post (imports components): create src/pages/blog/<slug>.astro,
//      then add an entry here.
//   2. Plain prose post: create src/pages/blog/<slug>.md with the BlogPost layout
//      in its frontmatter (see README), then add an entry here.
//
// The post page is created automatically by file-based routing; this list only
// controls what appears on the index and landing pages.

export interface Post {
  slug: string;          // matches the filename in src/pages/blog/
  title: string;
  date: string;          // ISO date
  summary: string;
  draft?: boolean;       // hide from listings without deleting
}

export const posts: Post[] = [
  {
    slug: "why-i-do-what-i-do",
    title: "Why I do what I do",
    date: "2026-03-18",
    summary: "On Doctor Strange, model horizons, and a small SEIR simulator you can poke at.",
  },
];

// Helper: published posts, newest first.
export const publishedPosts = posts
  .filter((p) => !p.draft)
  .sort((a, b) => +new Date(b.date) - +new Date(a.date));
