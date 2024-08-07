import { Component } from '@angular/core';
import { EducationComponent } from "../../views/education/education.component";
import { ExperiencesComponent } from "../../views/experiences/experiences.component";
import { SkillsComponent } from "../../views/skills/skills.component";
import { ProjectsComponent } from "../../views/projects/projects.component";
import { PresentationComponent } from "../../views/presentation/presentation.component";

@Component({
  selector: 'portfolio-background-content',
  standalone: true,
  imports: [EducationComponent, ExperiencesComponent, SkillsComponent, ProjectsComponent, PresentationComponent],
  templateUrl: './background-content.component.html',
  styleUrl: './background-content.component.scss'
})
export class BackgroundContentComponent {

}
