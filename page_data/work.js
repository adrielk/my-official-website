export const workExperiences = [
  {
    title: "Curiosity Stream",
    role: "Software Engineering Intern",
    blurb: "A streaming platform for educational entertainment",
    img: require("../images/curious-work.png"),
    detailed:
      "At Curiosity Stream, I worked as a team lead and developer for an advanced tagging system \
        to solve the problem of low-quality tagging and poor discoverability of media. My task was to\
        develop an internal web application that would provider greater assistance the tagger. This was accomplished with features\
        such as a managemenet system for tags, tag suggestions, tag search and pagination, and a tagging effectiveness bar to assess quality of tags.\
        A huge challenge with this project was requirements gathering as well as building reusable and scalable\
        software. Throughout the requirements gathering process, I learned how to compromise and communicate complex\
        ideas more effectively. When developing the web app, I learned how to modularize code into reusable and effective chunks.",
    technologies: ["Next.js", "React", "JavaScript", "MySQL", "Tailwind CSS"],
    link: "",
  },
  {
    title: "Brave Virtual Worlds",
    role: "Web Development Intern",
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
    link: "",
  },
  {
    title: "University of Virginia SEAS",
    role: "Undergraduate Parallel Computing Researcher",
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
    link: "https://github.com/adrielk/LSST-Brighter-Fatter-GPU-Optimization",
  },
];
/*
- Achieved an 11x speed-up over existing implementation of the brighter-fatter image correction algorithm in the Large Synoptic Survey Telescope science pipelines with CUDA C++, a parallel computing platform.
- Optimized matrix functions, such as gradient, diff, and absolute sum using GPU programming and optimization techniques such as shared memory and binary search reduction. */
//don't forget to add github links (mainly for personal projects)!!
//integrated pdf??
