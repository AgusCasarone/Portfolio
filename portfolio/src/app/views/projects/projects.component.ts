import { Component } from '@angular/core';
import { ProfessionalTitleComponent } from "../../utils/professional-title/professional-title.component";
import { projectList } from '../../../../public/assets/information/projectList';
import { Project } from '../../../interfaces/project';
import { ProfessionalBlockComponent } from "../../utils/professional-block/professional-block.component";

@Component({
  selector: 'projects',
  standalone: true,
  imports: [ProfessionalTitleComponent, ProfessionalBlockComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projectList: Project[] = projectList;
  isToggled: boolean = false;

  onToggle(isToggled: boolean) {
    this.isToggled = isToggled;
  }
}
