import { Component } from '@angular/core';
import { ProfessionalTitleComponent } from "../../utils/professional-title/professional-title.component";
import { ProfessionalBlockComponent } from "../../utils/professional-block/professional-block.component";
import { skillList } from '../../../../public/assets/information/skillList';
import { Skill } from '../../../interfaces/skill';

@Component({
  selector: 'skills',
  standalone: true,
  imports: [ProfessionalTitleComponent, ProfessionalBlockComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skillList: Skill[] = skillList;
  isToggled: boolean = false;

  onToggle(isToggled: boolean) {
    this.isToggled = isToggled;
  }
}
