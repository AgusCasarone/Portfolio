import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { BodyComponent } from "../body/body.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'main-layout',
  standalone: true,
  imports: [NavBarComponent, BodyComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
