import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'toggle-chevron',
  standalone: true,
  imports: [],
  templateUrl: './toggle-chevron.component.html',
  styleUrl: './toggle-chevron.component.scss'
})
export class ToggleChevronComponent {

  @Input() isToggled: boolean = false;
}
