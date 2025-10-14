import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  threejs,
  css,
  redux,
  nodejs,
  git,
  figma,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Video Editor",
    icon: web,
  },
  {
    title: "Typography Designer",
    icon: mobile,
  },
  {
    title: "Transition & Velocity Expert",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Adobe Premiere Pro",
    icon: figma,
  },
  {
    name: "After Effects",
    icon: threejs,
  },
  {
    name: "Photoshop",
    icon: css,
  },
  {
    name: "CapCut",
    icon: redux,
  },
  {
    name: "DaVinci Resolve",
    icon: nodejs,
  },
  {
    name: "VN Editor",
    icon: git,
  },
  {
    name: "Lightroom",
    icon: web,
  },
];

const experiences: TExperience[] = [
  {
    title: "Freelance Video Editor",
    companyName: "Self-Employed",
    icon: creator,
    iconBg: "#383E56",
    date: "March 2022- December 2023",
    points: [
      "Started my editing journey with short clips and reels.",
      "Learned basic motion, typography, and music sync techniques.",
      "Worked on Instagram reels and YouTube shorts for local creators.",
    ],
  },
  {
    title: "Content Editor",
    companyName: "Freelance Clients",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Editing high-energy videos with smooth transitions and beat syncs.",
      "Creating typography edits and dynamic montages.",
      "Collaborating with influencers and small creators to improve content appeal.",
      "Developing unique editing styles that match the client's vibe and music rhythm.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Manoj transformed my clips into stunning edits — the transitions and beat sync were perfect!",
    name: "Romek Xd",
    designation: "Developer",
    company: "Freelance Client",
    image: "https://www.rabbit.zone.id/r87x32.jpg",
  },
  {
    testimonial:
      "The typography and motion in my reel came out amazing. Super smooth and professional work!",
    name: "Ariyan Nath",
    designation: "Content Creator",
    company: "Instagram",
    image: "https://www.rabbit.zone.id/xmeru1.jpg",
  },
  {
    testimonial:
      "Great attention to detail and timing. Manoj’s edits always hit the right beat!",
    name: "allu arjun",
    designation: "Music Artist",
    company: "YouTube",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Typography",
    description:
      "A trending XML edit with motion typography and synchronized transitions.",
    tags: [
      {
        name: "AfterEffects",
        color: "blue-text-gradient",
      },
      {
        name: "Typography",
        color: "pink-text-gradient",
      },
    ],
    image: web,
    Link: "https://youtu.be/WcvKs4swPCs",
  },
  {
    name: "Velocity Focus",
    description:
      "Velocity-based edit syncing cuts and transitions to rhythm.",
    tags: [
      {
        name: "Velocity",
        color: "green-text-gradient",
      },
      {
        name: "Transitions",
        color: "pink-text-gradient",
      },
    ], 
    image: mobile,
    Link: "https://youtu.be/5JceTNYssoU",
  },
  {
    name: "Transition",
    description:
      "XML / Alight Motion edit project with powerful transitions and motion flow.",
    tags: [
      {
        name: "AlightMotion",
        color: "blue-text-gradient",
      },
      {
        name: "Motion",
        color: "green-text-gradient",
      },
    ],
    image: backend,
    Link: "https://youtu.be/rHX_SflUDck",
  },
];

export { services, technologies, experiences, testimonials, projects };