import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { personalInfoDetail } from '../../../../public/assets/information/personalInfoDetail';
import { PersonalInfo } from '../../../interfaces/personal-info';

@Component({
  selector: 'portfolio-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  personalInfoDetail: PersonalInfo = personalInfoDetail;
}
