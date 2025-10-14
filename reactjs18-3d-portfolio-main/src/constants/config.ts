type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Manoj AM — Video Editor Portfolio",
    fullName: "Manoj Nath",
    email: "kakashi817281@gmail.com",
  },
  hero: {
    name: "Manoj AM",
    p: [
      "I craft impactful visuals using typography, transitions, and velocity edits.",
      "Transforming ordinary clips into energetic and dynamic stories.",
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Let's Connect.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "Tell me about your project or collaboration idea.",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Who I Am.",
      content: `I'm an intermediate-level video editor specializing in typography, velocity,
      and transition-based edits. I create smooth and engaging visuals that sync perfectly
      with rhythm and emotion. I use tools like Adobe Premiere Pro, After Effects, and
      Photoshop to bring creative ideas to life. I'm constantly learning and improving to
      deliver clean, dynamic, and eye-catching edits for reels, shorts, and content creators.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Editing Journey.",
      content: `I've worked on a variety of short-form video projects including Instagram reels,
      YouTube edits, and promotional visuals for online creators and brands. I started my editing
      journey in 2020 and have been continuously evolving my style and techniques ever since.`,
    },
    feedbacks: {
      p: "What others say",
      h2: "Client Feedback.",
      content: `Clients appreciate my attention to beat sync, creative typography,
      and transition smoothness. I value collaboration and focus on delivering
      high-quality edits that match the client’s style and audience.`,
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Here are a few examples of my video editing projects — featuring typography-based
      reels, cinematic transitions, and velocity sync sequences. Each project reflects my creativity,
      timing precision, and dedication to storytelling through motion.`,
    },
  },
};