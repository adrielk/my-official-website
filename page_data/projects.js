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
    detailed:
      "The Google Books API is an amazing resource for finding books of all kinds. However, the Google Books search service\
    is not very appealing by today's standards. I wanted to make my own version of the service with a more mondern and functional\
    user-interface. With my web app, one can see browse many more books at once, save books to their library, and click on books to\
    get details on them.",
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
    title: "School Dashboard",
    role: null,
    blurb:
      "React CRUD application for managing teachers, students, classes, and events",
    img: require("../images/school-dash.png"),
    detailed:
      "As part of a team of 4, I lead and developed a mock full-stack school dashboard application that can be used by administrators to manage\
      every aspect of a high school. I've also implemented basic authentication for this website, which only allows logged-in users to view\
      and modify the website's contents. This project was a great exercise in full-stack development in a team setting.",
    technologies: [
      "React",
      "JavaScript",
      "Firebase",
      "Express.js",
      "Material-UI",
    ],
    link: "https://github.com/LaunchSWETeam2/JeffersonElementary",
  },

  {
    title: "PhysioDash",
    role: null,
    blurb: "Computer-vison exercise summarizer web application",
    img: require("../images/physiodash.png"),
    detailed:
      "As part of a team of 4, I contributed to the development of a health/fitness web application which can be used to\
       keep track of home workout progress through a webcam. This app used the open source Mediapipe pose classifier which we trained on\
       video data of various exercises we found on Kaggle. My role was developing the React web application and connecting to our Django backend which\
       contained the pose classification model. Currently, our web application can count the number of wall push ups, \
       lunges, and squats you do. In the future, we hope to train this model on more exercises and speed up the classification process.",
    technologies: [
      "React",
      "Django",
      "JavaScript",
      "Python",
      "Mediapipe Pose Classifier",
    ],
    link: "https://www.youtube.com/watch?v=sJjPFmnNey0&ab_channel=A",
  },
  {
    title: "COVID-19 Data Analysis",
    role: null,
    blurb:
      "Data analysis project using John's Hopkins COVID-19 time series and Twitter data",
    img: require("../images/covid-analysis.png"),
    detailed:
      "Using COVID-19 time-series, I developed visualizations that answered questions such as 'Which days are you most at risk of getting COVID?', and I\
      created a function that plotted time-series data given a specific U.S. state. Using COVID-19 related Twitter data, I filtered out data mentioning President Trump\
      to analyze how sentiment toward Trump changed over time. This project was a great exercise in data cleaning using Pandas and Numpy, and data visualization\
      with seaborn and matplotlib.",
    technologies: ["Python", "seaborn", "matplotlib", "pandas", "numPy"],
    link: "https://github.com/adrielk/Covid19-ML-and-Analysis",
  },
  {
    title: "CapTech Data Challenge",
    role: null,
    blurb: "Data visualization project",
    img: require("../images/captech.png"),
    detailed:
      "As part of a team of 4, I lead a data analysis project to determine\
    which was the best state for us to live and work after graduation. I used Python to do our initial exploration on \
    demographic data across the country in addition to California data from California Open Data. We then used Tableau to\
    display our insights.",
    technologies: ["Tableau", "Python"],
    link: "https://public.tableau.com/app/profile/adriel4607/viz/CapTech-Data-Challenge-Dashboard/CapTech_Final_Dashboard",
  },
];
