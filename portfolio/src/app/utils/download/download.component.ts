import { Component } from '@angular/core';
import { personalInfoDetail } from '../../../../public/assets/information/personalInfoDetail';
import { PersonalInfo } from '../../../interfaces/personal-info';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'profile-download',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss'
})
export class DownloadComponent {

  isDownloading: boolean = false;

  personalInfoDetail: PersonalInfo = personalInfoDetail;

}
