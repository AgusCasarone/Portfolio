import { Component, Input } from '@angular/core';

@Component({
  selector: 'professional-title',
  standalone: true,
  imports: [],
  templateUrl: './professional-title.component.html',
  styleUrl: './professional-title.component.scss'
})
export class ProfessionalTitleComponent {

  @Input() title: string = "";

}
