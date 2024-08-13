import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { personalInfoDetail } from '../../../../public/assets/information/personalInfoDetail';
import { PersonalInfo } from '../../../interfaces/personal-info';

@Component({
  selector: 'profile-download',
  standalone: true,
  imports: [],
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss'
})
export class DownloadComponent {

  personalInfoDetail: PersonalInfo = personalInfoDetail;

  fileName: string = personalInfoDetail.lastName + "-" + personalInfoDetail.firstName;

  image: string;

  constructor(private sanitizer: DomSanitizer) {
    this.image = 'https://example.com/your-image.jpg';
  }

  onDownload(): SafeUrl {
    const dataUrl = 'data:image/jpeg;base64,';
    console.log("deberia descargar")
    return this.sanitizer.bypassSecurityTrustUrl(dataUrl + this.image);
  }

}
