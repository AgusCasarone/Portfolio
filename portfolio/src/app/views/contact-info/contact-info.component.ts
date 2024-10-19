import { Component } from '@angular/core';
import { PersonalBlockComponent } from "../../utils/personal-block/personal-block.component";
import { personalInfoDetail } from '../../../../public/assets/information/personalInfoDetail';
import { PersonalInfo } from '../../../interfaces/personal-info';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'contact-info',
  standalone: true,
  imports: [PersonalBlockComponent, TranslateModule],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent {

  personalInfoDetail: PersonalInfo = personalInfoDetail;

}
