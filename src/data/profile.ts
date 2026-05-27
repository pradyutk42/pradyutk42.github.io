// Single source of truth for who you are and where to find you.
// Edit this one file and the change shows up everywhere (hero, footer, CV, contact).

export const profile = {
  name: "Pradyut Kumar",
  nickname: "Prads",
  role: "PhD Candidate",
  affiliation: "Ecology & Evolutionary Biology, Purdue University",
  advisor: { name: "Dr. Qixin He", url: "#" },

  // One-line and short positioning statements, reused in several places.
  tagline: "I build mathematical models to make sense of messy biological phenomena.",
  blurb:
    "I'm a PhD candidate working at the intersection of mathematics and disease biology — " +
    "using compartmental and agent-based models to understand how infections spread, how " +
    "drug resistance evolves, and how to design interventions that actually work.",

  // Set to a real file once you have it; placeholder is fine for now.
  portrait: "/portrait.jpg",   // drop the image at public/portrait.jpg
  cv: "/cv.pdf",               // drop the file at public/cv.pdf

  links: [
    { label: "CV",        href: "/cv" },
    { label: "Email",     href: "mailto:pradyutkumar01@gmail.com" },
    { label: "GitHub",    href: "https://github.com/pradyutk42" },
    { label: "Scholar",   href: "https://scholar.google.com/" },
    { label: "LinkedIn",  href: "https://www.linkedin.com/in/pradyutkumar/" },
    { label: "ORCID",     href: "https://orcid.org/" },
  ],
};

export type Profile = typeof profile;
