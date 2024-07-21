import { Component } from '@angular/core';
import { educationList } from '../../../../public/assets/information/educationList';
import { Education } from '../../../interfaces/education';
import { ProfessionalTitleComponent } from "../../utils/professional-title/professional-title.component";

@Component({
  selector: 'education',
  standalone: true,
  imports: [ProfessionalTitleComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

  educationList: Education[] = educationList;

}
