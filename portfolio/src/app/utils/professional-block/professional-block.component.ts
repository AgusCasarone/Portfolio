import { Component, Input } from '@angular/core';

@Component({
  selector: 'professional-block',
  standalone: true,
  imports: [],
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

}
