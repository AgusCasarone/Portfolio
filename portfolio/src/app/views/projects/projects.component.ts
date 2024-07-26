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

  projectList: Project[] = this.sortProjectList(projectList);
  isToggled: boolean = false;

  onToggle(isToggled: boolean) {
    this.isToggled = isToggled;
  }

  sortProjectList(projectList: Project[]): Project[] {
    return projectList.sort((a, b) => {
      if (a.order !== undefined && b.order !== undefined) {
        return a.order - b.order;
      } else if (a.order !== undefined) {
        return -1;
      } else if (b.order !== undefined) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
