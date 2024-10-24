import { Component, Input } from '@angular/core';
import { LinkButtonComponent } from "../link-button/link-button.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'professional-block',
  standalone: true,
  imports: [LinkButtonComponent, TranslateModule],
  templateUrl: './professional-block.component.html',
  styleUrl: './professional-block.component.scss'
})
export class ProfessionalBlockComponent {

  @Input() name: string = "";
  @Input() link?: string = "";
  @Input() institution: string = "";
  @Input() date: string = "";
  @Input() place?: string = "";
  @Input() technologies?: string[] = [];
  @Input() description?: string = "";
  @Input() design?: string = "";
  @Input() repository?: string = "";
  @Input() image?: string = "";

}
