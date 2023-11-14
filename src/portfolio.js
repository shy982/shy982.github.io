/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shyam Renjith",
  title: "Hey, I'm Shyam!",
  subTitle: emoji(
    "Passionate Software Developer 🚀 with a versatile skill set. Proficient in crafting dynamic Web and Mobile applications and Backend orchestration. Equipped with strong research, AI, ML pipeline, and deployment skills, honed through experiences at PlayStation, HPE, IBM Research and more."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Z_RINajyfJLdhcobtXyqbr0CrKaUQ-MF/view?usp=sharing",
  displayGreeting: true
};



// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shy982",
  linkedin: "https://www.linkedin.com/in/shyam-r-9201/",
  gmail: "srenjith@ucsd.edu",
  gitlab: "https://gitlab.com/shy982",
  kaggle: "https://www.kaggle.com/darkknight98",
  // wordpress: "https://www.shyai.wordpress.com",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Versatile software engineer with a broad skill set across development, AI, ML, and deployment",
  skills: [
    emoji("⚡ Proficient in crafting Progressive Web Applications (PWAs) using MERN stack"),
    emoji(
      "⚡ Love Integration of third-party services such as Firebase, AWS, and Digital Ocean for enhanced application functionality"
    ),
    emoji("⚡ Experienced in developing and deploying AI and ML solutions for real-world challenges"),
    emoji("⚡ Strong background in research, data analysis, and visualization in the field of Computer Science"),
    emoji("⚡ Embracing an agile, test-driven development approach with comprehensive documentation practices")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "c/c++",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "java",
    fontAwesomeClassname: "fas fa-coffee"
  },
  {
    skillName: "javascript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "reactjs",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "nodejs",
    fontAwesomeClassname: "fab fa-node"
  },
  {
    skillName: "spring",
    fontAwesomeClassname: "fas fa-seedling"
  },
  {
    skillName: "mysql",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "css3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "latex",
    fontAwesomeClassname: "fas fa-superscript"
  },
  {
    skillName: "bash",
    fontAwesomeClassname: "fas fa-terminal"
  },
  {
    skillName: "numpy",
    fontAwesomeClassname: "fas fa-chart-line"
  },
  {
    skillName: "tensorflow",
    fontAwesomeClassname: "fas fa-brain"
  },
  {
    skillName: "rest-api",
    fontAwesomeClassname: "fas fa-network-wired"
  },
  {
    skillName: "postman",
    fontAwesomeClassname: "fas fa-envelope-open-text"
  },
  {
    skillName: "git",
    fontAwesomeClassname: "fab fa-git"
  },
  {
    skillName: "flask",
    fontAwesomeClassname: "fas fa-flask"
  },
  {
    skillName: "kafka",
    fontAwesomeClassname: "fas fa-project-diagram"
  },
  {
    skillName: "jenkins",
    fontAwesomeClassname: "fas fa-cogs"
  },
  {
    skillName: "docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "kubernetes",
    fontAwesomeClassname: "fas fa-cube"
  },
  {
    skillName: "datadog",
    fontAwesomeClassname: "fas fa-chart-area"
  }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California San Diego",
      logo: require("./assets/images/UCSD_Seal.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2022 - March 2024",
      desc: "Specializing in AI. Expanding Domain knowledge in diverse fields, including Distributed Architectures, Biomedicine, Recommender Systems, and much more!",
      descBullets: [
        "Teaching Assistant for DSC 40B, DSC 80",
        "Graduate Student Researcher @ San Diego Supercomputer Center"
      ]
    },
    {
      schoolName: "The National Institute of Engineering, Mysore",
      logo: require("./assets/images/nie.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "August 2017 - August 2021",
      desc: "Ranked #1 in the program (6x Gold Medalist, Best outgoing student). Took courses on Big Data, Data Mining, Parallel Computing, Software Engineering, Cloud, Network Security, Operating Systems,...",
      descBullets: [
        "Best Final Year Project Award", 
        "3x IEEE Publications",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

// Extracted from Shyam Renjith's Resume

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design (ReactJS, Node.js, JavaScript, Wireframe)",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend Frameworks(Spring, Kafka, REST API, gRPC)",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming (C, C++, Python)",
      progressPercentage: "90%"
    },
    {
      Stack: "AI / Data Science (NumPy, TensorFlow, PyTorch, Hadoop)",
      progressPercentage: "83%"
    },
    {
      Stack: "DevOps (Git, Jenkins, Docker, Kubernetes)",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "PlayStation",
      companylogo: require("./assets/images/PS_logo.png"),
      date: "June 2023 – September 2023",
      desc: "Elevated Game Media Services features at PlayStation, earning praise for the PS5's in-console video rating system. Enhanced the Game Help AutoCapture tool, integrating Kafka, Cassandra, and Splunk for superior PS network video recommendations. Led cross-functional innovation in the global hackathon, creating a React-based trial status platform. Embraced agile, test-driven development with meticulous documentation.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Graduate Student Researcher",
      company: "San Diego Supercomputer Center",
      companylogo: require("./assets/images/sdsc_logo.jpeg"),
      date: "April 2023 – June 2023",
      desc: "Led detailed analysis of wind patterns and outages for SDG&E at the San Diego Supercomputer Center. Enhanced predictive modeling accuracy through unsupervised clustering and advanced feature engineering. Integrated PRISM and WRF datasets, improving weather data computation. Collaborated with Dr. Mai Nguyen on refining predictive models for superior classification.",
    },
    {
      role: "Software Engineer (R&D)",
      company: "Hewlett Packard Enterprise",
      companylogo: require("./assets/images/Hpe-logo.jpeg"),
      date: "Feb 2021 – Aug 2022",
      desc: "Led creation of customer-centric workload sizing engine at HPE, implementing innovative IP-level URL mapping for 4X performance boost. Achieved 56% customer engagement hike via UI/UX enhancements and React Native migration. Presented research on Deep Learning and CV-NLP redundancy detection in HPC algorithms. Pioneered methods for identifying multi-workload applet bottlenecks through data pruning, parsing, and responsive web development."
    },
    {
      role: "Deep Learning Intern",
      company: "National Institute of Technology, Karnataka",
      companylogo: require("./assets/images/nitk_logo.png"),
      date: "Sep 2020 -  Oct 2020",
      desc: "As a Deep Learning Research Intern at NIT Karnataka, utilized MATLAB to craft gradient-boosted 3D models for DV and image segmentation. Led team efforts in the hackathon project, successfully detecting breast cancer from WSIs using the CAMELYON16 dataset."
    },
    {
      role: "Project Intern",
      company: "IBM Research",
      companylogo: require("./assets/images/ibm.png"),
      date: "Feb 2020 – Aug 2020",
      desc: "Conducted meticulous research, data visualization, and analysis of GBDT algorithms benchmarked against IBM's SnapML at IBM Research. Directed DevOps for ML models, deploying on PowerAI + RAPIDS cuDF multi-cluster CUDA architectures. Earned praise from Zurich scientists for impactful contributions."
    },
    {
      role: "AI Intern",
      company: "Mysuru Consulting Group",
      companylogo: require("./assets/images/mcg_logo.png"),
      date: "June 2019 -  Aug 2019",
      desc: "As an AI Intern at Mysuru Consulting Group, contributed to multinational client projects, developing DL models for Text Summarization and Shipment Label routing. Formulated PoC AI use cases for stock prediction, financial trend research, and sports field ad-detection."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUP IDEAS - The Big Picture",
  projects: [
    {
      image: require("./assets/images/gods-eye-logo.jpeg"),
      projectName: "God's Eye",
      projectDesc: "A Full-fledged, Low cost, Manhunt software",
      footerLink: [
        {
          name: "Presentation Slides",
          url: "https://docs.google.com/presentation/d/1-FHL3kqDjdMCzX9YZgUu6t-69tNtGQiQ/edit?usp=sharing&ouid=118069104346827803577&rtpof=true&sd=true"
        },
        {
          name: "Research Work",
          url: "https://ieeexplore.ieee.org/document/9591788"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/safe-drive-logo.jpeg"),
      projectName: "SafeDrive",
      projectDesc: "Driver Distractedness detection and alert system",
      footerLink: [
        {
          name: "Demo",
          url: "https://www.youtube.com/watch?v=-ultrqXzHtk"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements and Awards 🏆 "),
  subtitle:
    "Recognitions, Honors, and Awards that highlight my achievements and contributions.",

  achievementsCards: [
    {
      title: "HPE IWD Global Hackathon Winner",
      subtitle:
        "Secured victory in the HPE International Women's Day Global Hackathon, showcasing innovation and technical prowess.",
      image: require("./assets/images/Hpe-logo.jpeg"), // Replace with the actual path to HPE logo
      imageAlt: "HPE Logo",
      footerLink: [
        {
          name: "Hackathon Winning Project",
          url: "https://github.com/shy982/Smart-Traffic-Violation-Recognition-Automation"
        },
        {
          name: "Award Certificate",
          url: "https://drive.google.com/file/d/your-certificate-id/view?usp=sharing"
        }
      ]
    },
    {
      title: "NIE Alumni Endowment Scholarship",
      subtitle:
        "Recipient of the NIE Alumni Endowment Scholarship, recognizing academic excellence and contribution to the institute.",
      image: require("./assets/images/nie_logo.png"), // Replace with the actual path to NIE logo
      imageAlt: "NIE Logo",
      footerLink: [
        {
          name: "Scholarship Certificate",
          url: "https://docs.google.com/document/d/1dvBKtBjVAXFu9t7BsywidNQyHUY6UmYc/edit?usp=sharing&ouid=118069104346827803577&rtpof=true&sd=true"
        }
      ]
    },
    {
      title: "Gold Medalist - Best Outgoing Student",
      subtitle:
        "Awarded the Gold Medal for being the First Rank Holder, Best Outgoing Student, demonstrating exceptional academic achievements.",
      image: require("./assets/images/gold-medals.jpeg"), // Replace with the actual path to gold medal image
      imageAlt: "Gold Medal Image",
      footerLink: [
        {
          name: "Receiving First Rank Award",
          url: "https://youtu.be/OHLfGgC_lks?t=4469"
        }
      ]
    },
    {
      title: "Global Top 50 - DrivenData Data Science Contest",
      subtitle:
        "Achieved a position among the top 50 participants in the DrivenData Data Science Contest, showcasing analytical skills.",
      image: require("./assets/images/driven-data-logo.jpeg"), // Replace with the actual path to DrivenData logo
      imageAlt: "DrivenData Logo",
      footerLink: [
        {
          name: "Contest Results",
          url: "https://www.drivendata.org/competitions/"
        }
      ]
    },
    {
      title: "MHRD India Govt. Appreciation",
      subtitle:
        "Received appreciation from the Ministry of Human Resource Development, Government of India, for outstanding academic performance.",
      image: require("./assets/images/mhrd-logo.webp"), // Replace with the actual path to MHRD logo
      imageAlt: "MHRD Logo",
      footerLink: [
        {
          name: "Appreciation Letter",
          url: "https://drive.google.com/file/d/1fCVmBQmSzMu2wwGb1Q9WWu9cvOIKlVYW/view?usp=sharing"
        }
      ]
    },
    {
      title: "KNSS Social Service Achievement Award",
      subtitle:
        "Recognized with the KNSS Social Service Achievement Award for significant contributions to COVID-19 programs through youth wing services.",
      image: require("./assets/images/knss-logo.png"), // Replace with the actual path to KNSS logo
      imageAlt: "KNSS Logo",
      footerLink: [
        {
          name: "Achievement Certificate",
          url: "https://drive.google.com/file/d/10LMFg4ucwnLdCPpv9eyVHZ34PXWESAOD/view?usp=sharing"
        }
      ]
    }
    
    // Add more achievements as needed
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://shyai.wordpress.com/2019/12/27/a-noobs-guide-to-what-the-hell-is-ai/",
      title: "A Noob's Guide to AI",
      description:
        "Do you want to learn what AI is all about in under 10 min?"
    },
    {
      url: "https://shyai.wordpress.com/2019/12/28/how-to-start-off-with-the-trinity-ai-ml-dl/",
      title: "The Trinity: AI, ML, DL",
      description:
        "Why you need to know them and the difference between them."
    },
    {
      url: "https://shyai.wordpress.com/research-work-publications/",
      title: "A Compilation of all My Research Work",
      description:
        "A convenient page that summarizes my research, conferences, and presentations"
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
