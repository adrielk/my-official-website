export const projects = [
  {
    title: "Personal Website",
    role: null,
    blurb: "What you're looking at now!",
    img: require("../images/website.png"),
    detailed:
      "This website was built from scratch using Next.js, React, Tailwind CSS, and TypeScript. The main challenge with this project was learning TypeScript, a superset of JavaScript\
    with types and interfaces. I chose TypeScript for this project soley for the purpose of learning it, and now I love it even more than JavaScript!",
    technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    link: null,
  },
  {
    title: "Library App",
    role: null,
    blurb: "An app for browsing books from the Google Books API",
    img: require("../images/library-app.png"),
    detailed: "",
    technologies: [
      "React",
      "JavaScript",
      "Firebase",
      "Express.js",
      "Material UI",
    ],
    link: "https://github.com/adrielk/react-library",
  },
  {
    title: "Restaurant Finder",
    role: null,
    blurb:
      "A start-up developing motion-capture hardware and software for gaining insights on athlete performance.",
    img: require("../images/brave-work.png"),
    detailed:
      "I developed a motion data visualization dashboard and a message/chat system for \
      Brave Virtual World's web platform. This platform will be used to allow coaches and physical therapists \
      analyze athlete performance and determine ways it can be improved. In addition, this platform enables communication\
      with a coach and all his/her athletes. A major challenge with this project was developing the data visualization dashboard in such\
      a way that would provide full flexibility for the user. This required forethought when engineering the components involved in\
      this feature.",
    technologies: ["React", "AWS Amplify", "Firebase", "Material-UI"],
    link: null,
  },

  {
    title: "PhysioDash",
    role: null,
    blurb:
      "Work under Professor Kevin Skadron and the Fermilab group involved in astronomy and computing",
    img: require("../images/research.png"),
    detailed: "An opportunity to use TypeScript. Honestly my new favorite..",
    technologies: ["C++", "CUDA", "cProfile", "KCachegrind", "Python"],
    link: null,
  },
  {
    title: "CapTech Data Challenge",
    role: null,
    blurb:
      "Work under Professor Kevin Skadron and the Fermilab group involved in astronomy and computing",
    img: require("../images/research.png"),
    detailed:
      "Using performance profiling tools such as cProfile and KCachegrind, \
      I identified areas of the code base in need of GPU optimization. I identified an image processing step,\
      called brighter-fatter correction, which would significantly benefit from GPU optimization. Using CUDA C++, NVIDIA libraries \
      and parallel programming techniques, I implemented the function and achieved a speed up of nearly 11X. Major challenges\
      with this project were adapting to the parallel programming paradigm and debugging this type of code. Many of my challenges\
      were solved by taking advantage of NVIDIA library functions, frequent communication with professors, and use of many external resources.",
    technologies: ["C++", "CUDA", "cProfile", "KCachegrind", "Python"],
    link: null,
  },
  {
    title: "COVID-19 Data Analysis",
    role: null,
    blurb:
      "Work under Professor Kevin Skadron and the Fermilab group involved in astronomy and computing",
    img: require("../images/research.png"),
    detailed:
      "Using performance profiling tools such as cProfile and KCachegrind, \
      I identified areas of the code base in need of GPU optimization. I identified an image processing step,\
      called brighter-fatter correction, which would significantly benefit from GPU optimization. Using CUDA C++, NVIDIA libraries \
      and parallel programming techniques, I implemented the function and achieved a speed up of nearly 11X. Major challenges\
      with this project were adapting to the parallel programming paradigm and debugging this type of code. Many of my challenges\
      were solved by taking advantage of NVIDIA library functions, frequent communication with professors, and use of many external resources.",
    technologies: ["C++", "CUDA", "cProfile", "KCachegrind", "Python"],
    link: null,
  },
];
