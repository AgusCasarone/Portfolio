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

  skillList: Skill[] = this.sortSkillList(skillList);
  isToggled: boolean = false;

  onToggle(isToggled: boolean) {
    this.isToggled = isToggled;
  }

  sortSkillList(skillList: Skill[]): Skill[] {
    return skillList.sort((a, b) => {
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
