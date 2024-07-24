import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToggleChevronComponent } from "../toggle-chevron/toggle-chevron.component";

@Component({
  selector: 'professional-title',
  standalone: true,
  imports: [ToggleChevronComponent],
  templateUrl: './professional-title.component.html',
  styleUrl: './professional-title.component.scss'
})
export class ProfessionalTitleComponent {

  @Input() title: string = "";
  @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  isToggled: boolean = false;

  onToggle() {
    this.isToggled = !this.isToggled;
    this.toggle.emit(this.isToggled);
  }
}
