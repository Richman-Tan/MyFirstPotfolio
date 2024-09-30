import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';
import questionmark from '../assets/icons/Question_mark_white.png';
import python from '../assets/tech/python.png';
import java from '../assets/tech/java.png';
import easebg from '../assets/projects/ease-elves-talk-light.png';
import javafxbg from '../assets/projects/javafx-mystery-game.png';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Java',
    icon: java,
  },
];

const experiences = [
  {
    title: 'Aspiring Software Engineer',
    company_name: 'Looking for first Opportunities',
    icon: questionmark, // Feel free to replace this with any placeholder icon or image
    iconBg: '#333333',
    date: 'Open to Start Anytime!',
  },
];


const projects = [
  {
    id: 'project-1',
    name: 'Ease Elves',
    description: 'An online web application developed during the "Hack for Humanity" hackathon to support mental health. It provides a virtual friend for users to confide in.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'javascript',
        color: 'yellow-text-gradient',
      },
    ],
    image: easebg, // Replace with a variable containing your image
    repo: 'https://github.com/your-username/ease-elves', // Update with your repository link
    demo: 'https://easeelves.netlify.app/', // Update with the actual demo link if available
  },
  {
    id: 'project-2',
    name: 'Music Recommender',
    description: 'A full-stack application that recommends music artists to users based on collaborative filtering techniques using a Flask backend and React frontend.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'flask',
        color: 'green-text-gradient',
      },
      {
        name: 'react',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard, // Replace with a variable containing your image
    repo: 'https://github.com/your-username/music-recommender', // Update with your repository link
    demo: 'https://musicrecommender.netlify.app/', // Update with the actual demo link if available
  },
  {
    id: 'project-3',
    name: 'Image Fingerprinting',
    description: 'A MATLAB project implementing image processing techniques to generate unique image fingerprints for comparison and identification.',
    tags: [
      {
        name: 'matlab',
        color: 'blue-text-gradient',
      },
      {
        name: 'image processing',
        color: 'green-text-gradient',
      },
    ],
    image: leaderboard, // Replace with a variable containing your image
    repo: 'https://github.com/your-username/image-fingerprinting', // Update with your repository link if available
    demo: 'https://your-demo-link.com/', // Update with the actual demo link if available
  },
  {
    id: 'project-4',
    name: 'JavaFX Mystery Game',
    description: 'A JavaFX-based game that simulates a mystery-solving scenario where players investigate suspects and clues to find the true culprit.',
    tags: [
      {
        name: 'java',
        color: 'blue-text-gradient',
      },
      {
        name: 'javafx',
        color: 'green-text-gradient',
      },
      {
        name: 'oop',
        color: 'pink-text-gradient',
      },
    ],
    image: javafxbg, // Replace with a variable containing your image
    repo: 'https://github.com/your-username/mystery-game', // Update with your repository link if available
    demo: 'https://your-demo-link.com/', // Update with the actual demo link if available
  },
];


export { services, technologies, experiences, projects };
