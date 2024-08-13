import { Component } from '@angular/core';
import { DownloadComponent } from "../../utils/download/download.component";
import { LanguageComponent } from "../../utils/language/language.component";

@Component({
  selector: 'portfolio-nav-bar',
  standalone: true,
  imports: [DownloadComponent, LanguageComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}
