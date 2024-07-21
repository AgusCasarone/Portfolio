import { Component } from '@angular/core';
import { ProfessionalTitleComponent } from "../../utils/professional-title/professional-title.component";

@Component({
  selector: 'skills',
  standalone: true,
  imports: [ProfessionalTitleComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
