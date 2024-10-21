import { Component } from '@angular/core';
import { socialMediaList } from '../../../../public/assets/information/socialMediaList';
import { Social } from '../../../interfaces/social';
import { PersonalBlockComponent } from '../../utils/personal-block/personal-block.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'social',
  standalone: true,
  imports: [PersonalBlockComponent, TranslateModule],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss'
})
export class SocialComponent {

  socialMediaList: Social[] = this.sortSocialMediaList(socialMediaList);

  sortSocialMediaList(socialMediaList: Social[]): Social[] {
    return socialMediaList.sort((a, b) => {
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
