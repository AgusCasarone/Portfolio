import { Component } from '@angular/core';
import { ProfessionalTitleComponent } from "../../utils/professional-title/professional-title.component";
import { experienceList } from '../../../../public/assets/information/experienceList';
import { Experience } from '../../../interfaces/experience';
import { ProfessionalBlockComponent } from "../../utils/professional-block/professional-block.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'experiences',
  standalone: true,
  imports: [
    ProfessionalTitleComponent,
    ProfessionalBlockComponent,
    TranslateModule
  ],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  experienceList: Experience[] = this.sortExperienceList(experienceList);

  isToggled: boolean = false;

  onToggle(isToggled: boolean) {
    this.isToggled = isToggled;
  }

  sortExperienceList(experienceList: Experience[]): Experience[] {
    return experienceList.sort((a, b) => {
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
