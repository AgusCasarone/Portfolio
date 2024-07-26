import { Component, Input } from '@angular/core';

@Component({
  selector: 'personal-block',
  standalone: true,
  imports: [],
  templateUrl: './personal-block.component.html',
  styleUrl: './personal-block.component.scss'
})
export class PersonalBlockComponent {

  @Input() title?: string;
  @Input() stringList?: string[];
  @Input() linkList?: string[];
  @Input() imageLink?: string[];
  @Input() email?: string;
  @Input() phone?: string;
  @Input() phoneLink?: string;
  @Input() location?: string;

}
