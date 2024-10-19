import { Component } from '@angular/core';
import { personalInfoDetail } from '../../../../public/assets/information/personalInfoDetail';
import { PersonalInfo } from '../../../interfaces/personal-info';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'identity',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './identity.component.html',
  styleUrl: './identity.component.scss'
})
export class IdentityComponent {

  personalInfoDetail: PersonalInfo = personalInfoDetail;

}
