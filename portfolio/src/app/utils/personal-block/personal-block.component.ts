import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personal-block',
  standalone: true,
  imports: [],
  templateUrl: './personal-block.component.html',
  styleUrl: './personal-block.component.scss'
})
export class PersonalBlockComponent {

  @Input() stringList?: string[];
  @Input() email?: string;
  @Input() phone?: string;
  @Input() location?: string;

}
