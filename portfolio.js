import emoji from 'react-easy-emoji';

export const greetings = {
  name: 'Leong Kai Joon',
  title: "Hi all, I'm Leong Kai Joon",
  description:
    "I'm a passionate aspiring Full Stack web developer with some experience of web applications with Javascript, HTML, CSS, and mobile applications with React Native",
  resumeLink: 'https://1drv.ms/b/s!Am17rzAS2ALciqFskl9UzfChS5kY_g?e=PRCuA6',
};

export const openSource = {
  githubUserName: 'darwin098',
};

export const contact = {};

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/kai-joon-leong-baa646148/',
  github: 'https://github.com/darwin098',
};

export const skillsSection = {
  title: 'What I do',
  subTitle:
    'ASPIRING FULL STACK DEVELOPER WHO WANTS TO LEARN MORE ABOUT WEB TECHNOLOGIES',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Built a full stack Steam replica in a team using ReactJS'),
        emoji('⚡ Dabbled in Angular to recreate this porfolio template'),
        emoji('⚡ Hosting of websites with Netlify'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassname: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassname: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Angular',
          fontAwesomeClassname: 'logos:angular-icon',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassname: 'logos:npm-icon',
        },
        {
          skillName: 'Netlify',
          fontAwesomeClassname: 'vscode-icons:file-type-netlify',
        },
      ],
    },
    {
      title: 'Backend Experiences',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji('⚡ Building servers with SQL (PostgreSQL, MySQL)'),
        emoji('⚡ Dabbled in MongoDB and NoSQL'),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'Heroku',
          fontAwesomeClassname: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassname: 'logos:postgresql',
        },
        {
          skillName: 'MongoDB',
          fontAwesomeClassname: 'vscode-icons:folder-type-mongodb',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Dabbled in beginner Smart Contracts using Solidity & Ethereum'
        ),
        emoji('⚡ Interested in developing practical dApps using Solidity'),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          fontAwesomeClassname: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          fontAwesomeClassname: 'logos:solidity',
        },
        {
          skillName: 'Metamask',
          fontAwesomeClassname: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          fontAwesomeClassname: 'logos:ganache-icon',
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '60', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '80',
  },
  {
    Stack: 'Programming',
    progressPercentage: '80',
  },
];

export const educationInfo = [
  {
    schoolName: 'Singapore Polytechnic',
    subHeader: 'Diploma in Information Technology',
    duration: 'April 2021 - present date',
    // desc: 'Participated in the research of XXX and published 3 papers.',
    grade: 'Cumulative GPA: 3.561',
    descBullets: ['Expected to finish education by June 2024'],
  },
];

export const experience = [
  {
    role: 'Frontend Developer',
    company: 'Duseca Software',
    companylogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Apr 2022 – Jun 2022',
    desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
  },
  {
    role: 'API Engineer',
    company: 'Duseca Software',
    companylogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Jan 2022 – Mar 2022',
    desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Bleed-AI',
    companylogo: '/img/icons/common/bleedAI.jpg',
    date: 'Sept 2021 - Oct 2021',
    desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
  },
  {
    role: 'Backend Developer',
    company: 'Wapidu',
    companylogo: '/img/icons/common/wapidu.jpg',
    date: 'Sept 2021',
    desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
  },
];

export const projects = [
  {
    name: 'Water Vapor',
    desc: 'A Steam replica built with ReactJS and ExpressJS',
    github: 'https://github.com/darwin098/Water-Vapor-Frontend',
    link: 'water-vapor.netlify.app',
  },
];

export const feedbacks = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// See object prototype on SEO.jsx page
export const seoData = {
  title: 'Leong Kai Joon',
  keywords: [],
};
