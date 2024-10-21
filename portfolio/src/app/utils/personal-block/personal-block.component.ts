import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'personal-block',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './personal-block.component.html',
  styleUrl: './personal-block.component.scss'
})
export class PersonalBlockComponent {

  @Input() title?: string;
  @Input() stringList?: string[];
  @Input() imageLinkList?: string[];

}
