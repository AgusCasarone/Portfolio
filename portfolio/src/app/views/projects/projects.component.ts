import { Component } from '@angular/core';
import { ProfessionalTitleComponent } from "../../utils/professional-title/professional-title.component";

@Component({
  selector: 'projects',
  standalone: true,
  imports: [ProfessionalTitleComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
