import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/data_quad.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/HRDashboard.png';
import porfolioImage4 from '../images/portfolio/SpaceX.png';
import porfolioImage5 from '../images/portfolio/tunisair.png';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/analysis.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Aziz Feriani',
  description: "Aziz' space",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Aziz Feriani.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a computer science graduate based in dortmund , worked
        at <strong className="text-stone-100">WILO</strong> as a Software Tester helping build Python tools using different data techniques 
        and enabling full automation testing.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">All inklusive</strong>,
        or coding and learning new techs such as <strong className="text-stone-100">Cloud AWS</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Places</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/AzizFeriani.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Software Tester with 2 years of experience as a working student with good experience using Python, Jenkins
  Git, Bash and multiple other tools`,
  aboutItems: [
    {label: 'Location', text: 'Dortmund, Germany', Icon: MapIcon},
    {label: 'Interests', text: 'Gaming,Traveling,Fitness Training,Coding', Icon: SparklesIcon},
    {label: 'Study', text: 'Technical University Of Dortmund', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Deutsch',
        level: 9,
      },
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 10,
      },
    ],
  },
  {
    name: 'Software Testing',
    skills: [
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'Bash',
        level: 10,
      },
      {
        name: 'Test Automation',
        level: 9,
      },
      {
        name: 'Matlab',
        level: 9,
      },
      {
        name: 'Tortoise SVN/Git',
        level: 9,
      },
      {
        name: 'Polarion',
        level: 8,
      },
      {
        name: 'NI TestStand/NI LabVIEW',
        level: 6,
      },
      {
        name: 'Jenkins',
        level: 5,
      },
    ],
  },
  {
    name: 'Skills I learned at the University',
    skills: [
      {
        name: 'Java',
        level: 10,
      },
      {
        name: 'SQL',
        level: 10,
      },
      {
        name: 'R',
        level: 9,
      },
      {
        name: 'Blockchain and Web3',
        level: 8,
      },
      {
        name: 'Data Science',
        level: 10,
      },
      {
        name: 'Typescript',
        level: 7,
      },
    ],
  },
  {
    name: 'Skills I learned alone',
    skills: [
      {
        name: 'NoSQL',
        level: 10,
      },
      {
        name: 'Microsoft PowerBI',
        level: 10,
      },
      {
        name: 'ETL Tools',
        level: 10,
      },
      {
        name: 'Amazon Web Services (AWS)',
        level: 10,
      },
      {
        name: 'Excel',
        level: 10,
      },
      {
        name: 'MYSQL',
        level: 10,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Analysis on Emerging Technology Skills and Trends',
    description: 'Since I am currently interested in learning and mastering programming languages and skills, I completed this project to benefit myself and others. We will use a variety of data analytics skills and strategies here.',
    url: 'https://github.com/Aziz-fer/Analysis-on-Emerging-Technology-Skills-and-Trends',
    image: porfolioImage7,
  },
  {
    title: 'Attack on Proof of Stake Algorithm Simulation',
    description: 'Python-based project that involves implementing an algorithm resembling ETH2.0 Proof of Stake, developing an attack and then using different python libraries such as matplotlib,numpy,Math,random and tkinter. We are able to get a configurable Gui enabling us to visualize different plots and animations',
    url: 'https://github.com/Aziz-fer/BA-LMD-Ghost-Sim',
    image: porfolioImage2,
  },
  {
    title: 'An HR Dashboard using MySQL and PowerBI',
    description: 'This dashboard provides a comprehensive and real-time overview of key performance indicators (KPIs) to empower data-driven decision-making. It features an intuitive layout that segments data into clear, actionable insights, enabling quick analysis of trends, performance metrics, and operational efficiency. Designed for optimal user experience, it ensures that stakeholders can easily track progress, identify areas for improvement, and effectively manage business operations.',
    url: 'https://github.com/Aziz-fer/An-HR-Dashboard-using-MySQL-and-PowerBI',
    image: porfolioImage3,
  },
  {
    title: 'Space-X',
    description: 'About Space X advertises Falcon 9 rocket launches on its website with a cost of 62 million dollars; other providers cost upward of 165 million dollars each, much of the savings is because Space X can reuse the first stage. Therefore if we can determine if the first stage will land, we can determine the cost of a launch.',
    url: 'https://github.com/Aziz-fer/IBM-DataScience-SpaceX-Aziz-Project',
    image: porfolioImage4,
  },
  {
    title: 'Tunisair airlines flight performance',
    description: 'This repository contains the data pipeline and analysis to generate a daily key performance indicator report on Tunisair flight delays.',
    url: 'https://github.com/Aziz-fer/Tunisair-airlines-flight-performance',
    image: porfolioImage5,
  },
  {
    title: 'Data Analysis from TxT files',
    description: 'Python-based project that involves reading data from multiple files, each containing temperature data represented in different number systems (binary, quaternary, and octal). The data is converted to decimal format, visualized using Matplotlib,Numpy and optionally smoothed using spline interpolation from SciPy. Additionally, the project offers functionality to plot specific sections of the data on the x-axis.',
    url: 'https://github.com/Aziz-fer/txt-data-analysis/tree/main',
    image: porfolioImage1,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2024',
    location: 'Technical University Of Dortmund',
    title: 'BSc. Computer Science',
    content: <p>I completed my Bachlor Degree with minor in Data Science and Economics</p>,
  },
  {
    date: 'June 2018',
    location: 'Elite High School of Sousse',
    title: 'Scientific Baccalaureate',
    content: <p>I completed my Baccalaureate with a note 1.3 (17.01/20). My studies where focused on Computer Science, Math, Electrical engineering and Mechanical engineering </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Wilo June 2022 - Present',
    location: 'Wilo Dortmund',
    title: 'Working Student Software Tester',
    content: (
      <p>
        **Witest-App**
Collaborated with a five-member team and external partners in Turkey to develop a comprehensive Python-based tool for testing our pump software products. Key contributions included:
Developed data collection scripts using Polarion's REST API to efficiently gather necessary test data, followed by using SQL to systematically structure the data into well-organized tables.
Implemented data processing routines to optimize test accuracy and performance.
Supported the creation of a domain-specific language (DSL) to simplify writing test cases.
Designed a Tkinter-based GUI for efficient management and retrieval of test cases.
Designed and implemented Jenkins jobs within Jenkins CI/CD pipelines to achieve fully automated testing.
Automated test execution and result presentation through dynamically generated HTML reports.
Documented the process and presented project results in Tableau for stakeholders.
**Matlab Dashboard**
Worked on a MATLAB project to enhance the motor performance of Wilo pumps, focusing on advanced data analysis and visualization. Main responsibilities included:
Extracted data from Polarion databases and Excel spreadsheets for analysis.
Conducted data cleaning and comprehensive descriptive statistical analyses, including the calculation of descriptive statistics.
Developed comprehensive dashboards with detailed plots and charts to visualize motor performance trends, enabling targeted improvements and optimizations.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Me',
      text: 'My work ethic is based on collaboration and clear communication. I take pleasure in teamwork and have the ability to explain complicated concepts to both technical and non-technical stakeholders. I can easily learn new technologies, and I work well under pressure.',
      
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch with me.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'ferianiaziz@gmail.com',
      href: 'mailto:ferianiaziz@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Dortmund, Germany',
      href: 'https://www.google.de/maps/place/Dortmund/@51.4719744,7.4285056,12z/data=!4m6!3m5!1s0x47b91760bff07a11:0x427f28131548750!8m2!3d51.5135872!4d7.4652981!16zL20vMDEzNWsy?entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: '@aziz.feriani',
      href: 'https://www.instagram.com/azizferiani/',
    },
    {
      type: ContactType.LinkedIn,
      text: '@Aziz Feriani',
      href: 'https://www.linkedin.com/in/aziz-feriani-761812226/',
    },
    {
      type: ContactType.Github,
      text: 'Aziz-fer',
      href: 'https://github.com/Aziz-fer',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Aziz-fer'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/aziz-feriani-761812226/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/azizferiani/'},
];
