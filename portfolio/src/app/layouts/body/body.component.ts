import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { BackgroundContentComponent } from "../background-content/background-content.component";
import { IdentityComponent } from "../../views/identity/identity.component";

@Component({
  selector: 'portfolio-body',
  standalone: true,
  imports: [SideBarComponent, BackgroundContentComponent, IdentityComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
