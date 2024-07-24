import { Component } from '@angular/core';
import { ProfessionalTitleComponent } from "../../utils/professional-title/professional-title.component";
import { experienceList } from '../../../../public/assets/information/experienceList';
import { Experience } from '../../../interfaces/experience';
import { ProfessionalBlockComponent } from "../../utils/professional-block/professional-block.component";

@Component({
  selector: 'experiences',
  standalone: true,
  imports: [ProfessionalTitleComponent, ProfessionalBlockComponent],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  experienceList: Experience[] = experienceList;

  isToggled: boolean = false;

  onToggle(isToggled: boolean) {
    this.isToggled = isToggled;
  }
}
