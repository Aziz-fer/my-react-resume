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
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
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
        at <strong className="text-stone-100">WILO</strong> as a Software Testing helping build Python tools for Testing 
        and Testing different software releases.
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
      href: '/assets/resume.pdf',
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
    {label: 'Age', text: '24', Icon: CalendarIcon},
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
        name: 'Kotlin',
        level: 7,
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
        level: 9,
      },
      {
        name: 'Microsoft PowerBI',
        level: 8,
      },
      {
        name: 'Game Development using Godot/Unreal Engine',
        level: 8,
      },
      {
        name: 'Amazon Web Services (AWS)',
        level: 8,
      },
      {
        name: 'Terraform',
        level: 6,
      },
      {
        name: 'Docker',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Data Analysis from TxT files',
    description: 'This project involves reading data from multiple files, each containing temperature data represented in different number systems (binary, quaternary, and octal). The data is converted to decimal format, visualized using Matplotlib,Numpy and optionally smoothed using spline interpolation from SciPy. Additionally, the project offers functionality to plot specific sections of the data on the x-axis.',
    url: 'https://github.com/Aziz-fer/txt-data-analysis/tree/main',
    image: porfolioImage1,
  },
  {
    title: 'Attack on Proof of Stake Algorithm Simulation',
    description: 'This project involves implementing an algorithm resembling ETH2.0 Proof of Stake, developing an attack and then using different python libraries such as matplotlib,numpy,Math,random and tkinter. We are able to get a configurable Gui enabling us to visualize different plots and animations',
    url: 'https://github.com/Aziz-fer/BA-LMD-Ghost-Sim',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/Aziz-fer',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/Aziz-fer',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/Aziz-fer',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/Aziz-fer',
    image: porfolioImage6,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2024',
    location: 'Technical University Of Dortmund',
    title: 'BSc. Computer Science',
    content: <p>I completed my Bachlor Degree in 9 Semesters and got 2.7</p>,
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
        Worked with a 5-member team developing tools using Python to enable full Automation testing. We also worked with a team from turkey
        to test different Pump Softwares.
        Worked on a Project for 6 Months to develop a Matlab Gui using Wilo large databases from polarion and Excel Sheets to improve Motor efficiency of Wilo Pumps. 
        I worked on cleaning the data necessary for predictive models, analysing quantitative data and representing them in form of Plots and Diagrams.
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
