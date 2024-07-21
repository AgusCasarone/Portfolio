import { Component } from '@angular/core';
import { personalInfoDetail } from '../../../../public/assets/information/personalInfoDetail';
import { PersonalInfo } from '../../../interfaces/personal-info';

@Component({
  selector: 'identity',
  standalone: true,
  imports: [],
  templateUrl: './identity.component.html',
  styleUrl: './identity.component.scss'
})
export class IdentityComponent {

  personalInfoDetail: PersonalInfo = personalInfoDetail;

}
