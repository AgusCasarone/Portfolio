import { Component } from '@angular/core';
import { educationList } from '../../../../public/assets/information/educationList';
import { Education } from '../../../interfaces/education';
import { ProfessionalTitleComponent } from "../../utils/professional-title/professional-title.component";
import { ProfessionalBlockComponent } from "../../utils/professional-block/professional-block.component";

@Component({
  selector: 'education',
  standalone: true,
  imports: [ProfessionalTitleComponent, ProfessionalBlockComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

  educationList: Education[] = educationList;
  isToggled: boolean = false;

  onToggle(isToggled: boolean) {
    this.isToggled = isToggled;
  }
}
