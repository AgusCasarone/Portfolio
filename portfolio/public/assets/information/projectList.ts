import { Project } from "../../../src/interfaces/project";

export const projectList: Project[] = [
  {
    name: 'projects.ejam.name',
    link: 'projects.ejam.link',
    description: 'projects.ejam.description',
    repository: 'projects.ejam.repository',
    design: 'projects.ejam.design',
    date: 'projects.ejam.date',
    image: 'projects.ejam.image'
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
