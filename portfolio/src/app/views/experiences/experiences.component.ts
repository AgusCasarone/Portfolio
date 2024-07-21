import { Component } from '@angular/core';
import { ProfessionalTitleComponent } from "../../utils/professional-title/professional-title.component";

@Component({
  selector: 'experiences',
  standalone: true,
  imports: [ProfessionalTitleComponent],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

}
