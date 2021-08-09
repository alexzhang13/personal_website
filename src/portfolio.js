const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Alex Zhang's Portfolio",
  description: "I'm a Princeton Student interested in ML/AI and SWE",
  og: {
    title: "Alex Zhang",
    type: "website",
    url: "http://zhalex.com/",
  },
};

//Home Page
const greeting = {
  title: "Hi!",
  sub: "Alex Zhang",
  logo_name: "Alex Zhang",
  resumeLink: "",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/alexzhang13",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/alexzhang13/",
    },
    {
      siteName: "Instagram",
      iconifyClassname: "simple-icons:instagram",
      style: {
        color: "#ffffff",
      },
      profileLink: "https://www.instagram.com/alexzhangxd/",
    },
    {
      siteName: "Twitter",
      iconifyClassname: "simple-icons:twitter",
      style: {
        color: "#1da1f2",
      },
      profileLink: "https://twitter.com/madeinchinagtfd",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "AI/ML Research",
      skills: [
        "⭐️ I have been working in the NLP lab at Princeton since March 2021.",
        "⭐️ I'm also currently an officer in the Princeton Data Science club.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Web Development",
      skills: [
        "⚡ I've been working on a website for Princeton using HTML5, CSS3, BootStrap5, and Flask. ",
        "⚡ The website is for easily finding professors to work with based on research interests. ",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos-bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F0DB4F",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "Other Programming Ventures",
      skills: [
        "👾 I have recently started doing competitive programming for fun! ",
        "🎮 I've also been working on some game development projects in my free time ",
      ],
      softwareSkills: [
        {
          skillName: "Codeforces",
          fontAwesomeClassname: "simple-icons:codeforces",
          style: {
            color: "#ffffff",
          },
        },
        {
          skillName: "Unreal Engine 4",
          fontAwesomeClassname: "simple-icons:unrealengine",
          style: {
            color: "#ffffff",
          },
        },
        {
          skillName: "Unity",
          fontAwesomeClassname: "simple-icons:unity",
          style: {
            color: "#2fa3f7",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Welcome to my projects portfolio! Below is a list of projects that I have worked on in the past or am working on right now.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "Anonymous Preprint",
      img_path: "question.gif",
      description:
        "Paper being published from work done in Karthik Narasimhan's group in the Princeton NLP lab. Will update with details when allowed.",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "PyTorch",
          color: "#ee4c2c",
        },
        {
          lang: "NLP",
          color: "#1290ff",
        },
        {
          lang: "Reinforcement Learning",
          color: "#9d1cbd",
        },
      ],
      link: "",
      code: "https://github.com/alexzhang13",
      linkcolor: "white",
    },

    {
      title: "TremorWear",
      img_path: "tremorwear.png",
      description:
        "A smart-sensing, device independent software library designed for tremor suppression orthoses. The library uses an encoder-decoder model to compensate for actuator and sensor delays by solving a time-series prediction problem. Data was simulated in UE4.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "c++",
          color: "#c47206",
        },
        {
          lang: "Tensorflow",
          color: "#ffae17",
        },
        {
          lang: "Unreal Engine 4",
          color: "#ff4b4b",
        },
        {
          lang: "Arduino",
          color: "#0011ff",
        },
      ],
      link:
        "https://abstracts.societyforscience.org/Home/FullAbstract?Category=Any%20Category&AllAbstracts=False&FairCountry=Any%20Country&FairState=Any%20State&ProjectId=17824",
      code: "https://github.com/alexzhang13/TremorWear_Env",
      linkcolor: "white",
    },
    {
      title: "TigerResearch",
      img_path: "question.gif",
      description:
        "A website designed to help students find Princeton professors based on matching interests, related faculty, and work styles for both research and independent work. ",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "Flask",
          color: "#1aa321",
        },
        {
          lang: "Javascript",
          color: "#F0DB4F",
        },
        {
          lang: "PostgreSQL",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "",
      code: "https://github.com/alexzhang13",
      linkcolor: "white",
    },
    {
      title: "Maze Navigation Robot using SLAM, CV, and Pathfinding Algorithms",
      img_path: "slam.jpg",
      description:
        "Built a compact robot from scratch using 3D-printed parts, time-of-flight lasers, motors, a camera, a Raspberry PI, and an Arduino for traversing maze environments. Used C++, Python, and OpenCV to create a SLAM-based algorithm for generating a localized map of a robot’s surroundings.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "c++",
          color: "#c47206",
        },
        {
          lang: "OpenCV",
          color: "#ff4b4b",
        },
        {
          lang: "Arduino",
          color: "#0011ff",
        },
      ],
      link: "https://github.com/alexzhang13/rcj-code",
      code: "https://github.com/alexzhang13/rcj-code",
      linkcolor: "white",
    },
    {
      title: "Possession",
      img_path: "possession.png",
      description:
        "A 3D open-world game built in Unreal Engine 4 following a character named Prodolis seeking revenge on a mysterious being. This is a fun side project I've been working on for a while, check out the trailer/gameplay above!",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "c++",
          color: "#c47206",
        },
        {
          lang: "Unreal Engine 4",
          color: "#ff4b4b",
        },
      ],
      link: "https://www.youtube.com/watch?v=6Mmfo44FxhA",
      code: "https://github.com/alexzhang13/",
      linkcolor: "white",
    },

    {
      title: "Georg's Game",
      img_path: "qiskit.gif",
      description:
        "Project with a group of friends for the 2021 NYU Qiskit Hackathon in Quantum Computing. We designed a turn-based PvP game focused on manipulating quantum gates with the goal of maximizing the probability of measuring of a certain set of bits.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "Flask",
          color: "#1aa321",
        },
        {
          lang: "Javascript",
          color: "#F0DB4F",
        },
        {
          lang: "Firebase",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link:
        "https://www.hackerearth.com/challenges/hackathon/nyu-qiskit-hackathon/#overview",
      code: "https://github.com/areeq-hasan/georgsgame",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Princeton NLP Lab",
        subtitle: "Undergraduate Researcher",
        date: "March 2021 - present",
        content: [
          "Worked under a PhD student in Karthik Narasimhan's group for visual forecasting with NLP components project. ",
          "Currently working on a new project involving video summarization and description techniques.",
        ],
      },
      {
        title: "SRI International",
        subtitle: "Machine Learning Research Intern",
        date: "Summer 2018, Summer 2019",
        content: [
          "Built and evaluated several multi-task deep reinforcement learning models using Keras, TensorFlow, and DeepMind’s PySC2 library to investigate the catastrophic forgetting phenomena.",
          "Wrote Python framework for visualizing model learning in the PySC2 environment for DARPA L2M project. Co-wrote DARPA report.",
          "Investigated shortcomings of reinforcement learning models for lifelong learning due to effects such as catastrophic forgetting and potential sparse memory-based solutions.",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Princeton University",
          subtitle: "BSE in Computer Science",
          date: "2020 - Present",
          content: [
            "Planned certificates in Stats/ML, Engineering Physics, and Applied Math",
            "Courses taken: MAT 215/217, ORF 309, COS 226/326/340, PHY 105/106, PHI 201, WRI 176",
          ],
        },
        {
          title: "Montgomery High School",
          subtitle: "High School Degree",
          date: "2016 - 2020",
          content: ["Valedictorian (1/400)"],
        },
      ],
    },
    {
      title: ["Awards and Achivements"],
      data: [
        {
          title: "Awards",
          content: [
            "Overall Winner of 2021 NYU Quantum Computing Qiskit Hackathon",
            "2nd in Category in Biomedical Engineering at 2019 ISEF",
            "Category Winner at 2019 Conrad Innovation Challenge",
            "Grand Prize Winner at 2019 NJ Regional Science Fair",
          ],
        },
        {
          title: "Achievements",
          content: [
            "Published research paper to IEEE Xplore through 2019 MIT IEEE Conference. ",
            "Managed a small team to work on UE4 game project. ",
            "Sold over 133,000 Copies of independently developed game. ",
            "Presented SLAM robot at World Maker Faire 2018",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "Feel free to contact me through any of the socials below, or by just emailing me at alzhang@princeton.edu",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Gmail",
    link: "mailto:alzhang@princeton.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Github",
    link: "https://www.github.com/alexzhang13",
    iconifyClassname: "simple-icons:github",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/alexzhang13/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/alexzhang13/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
