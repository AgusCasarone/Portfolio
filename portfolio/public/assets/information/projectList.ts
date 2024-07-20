import { Project } from "../../../src/interfaces/project";

export const projectList: Project[] = [
  {
    name: 'eJam postulation project',
    link: 'https://ejam-agustina-casarone.netlify.app/',
    description: 'This was made in 24hs for a Full Stack Developer position at eJam. ' +
      '\n It is a pixel perfect working webpage based on the design I was given.' +
      '\n I used Angular 18 with Tailwind for the development.',
    repository: 'https://github.com/AgusCasarone/eJam-challenge',
    design: 'https://www.figma.com/design/gHf56mhtFr0lXky0poofoQ/ejam---Clarifion-Upsell-%5B-Client-V-%5D-(Copy)?node-id=0-1&t=ErPOr9kcDMPXakqX-0',
    date: 'Jun 2024',
    image: 'assets/images/projects/ejam.svg'
  },
  {
    name: "Portfolio + CV",
    description: "This very project. It was made with Angular 18. " +
      "\n My goal was to have both a Portfolio and a CV easy to maintain, update and customize as time goes on. " +
      "Since I know I am not the only one who needs this kind of solution, I took the time to make this reusable for anyone to copy and adapt for themselves. ",
    repository: 'https://github.com/AgusCasarone/Portfolio',
    design: 'https://www.figma.com/design/F9pH3o2t0Tm3I8yqtDP6zw/CV-color-light-english?node-id=0-1&t=InBec7ZXACjMsu3X-0',
    date: "Started on July 2024, last updated on July 2024"
  },
  {
    name: "Taskly microfrontend",
    description: "This was made over an in-company course given by MindHub for ITR. It is a login/register page.",
    repository: "https://github.com/AgusCasarone/Taskly-microfrontend-register",
    date: "Jun 2024"
  }
]
