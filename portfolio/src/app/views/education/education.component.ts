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

  educationList: Education[] = this.sortEducationList(educationList);;

  isToggled: boolean = false;

  onToggle(isToggled: boolean) {
    this.isToggled = isToggled;
  }

  sortEducationList(educationList: Education[]): Education[] {
    return educationList.sort((a, b) => {
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
