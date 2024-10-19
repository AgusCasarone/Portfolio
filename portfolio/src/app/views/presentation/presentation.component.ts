import { Component } from '@angular/core';
import { ProfessionalTitleComponent } from "../../utils/professional-title/professional-title.component";
import { personalInfoDetail } from '../../../../public/assets/information/personalInfoDetail';
import { PersonalInfo } from '../../../interfaces/personal-info';
import { Presentation } from '../../../interfaces/presentation';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'presentation',
  standalone: true,
  imports: [ProfessionalTitleComponent, TranslateModule],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {

  presentation: PersonalInfo = personalInfoDetail;
  isToggled: boolean = false;

  onToggle(isToggled: boolean) {
    this.isToggled = isToggled;
  }
}
