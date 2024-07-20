import { Component } from '@angular/core';
import { ContactInfoComponent } from "../../views/contact-info/contact-info.component";
import { KnowledgeComponent } from "../../views/knowledge/knowledge.component";
import { LanguagesComponent } from "../../views/languages/languages.component";
import { SocialComponent } from "../../views/social/social.component";
import { HobbiesComponent } from "../../views/hobbies/hobbies.component";

@Component({
  selector: 'portfolio-side-bar',
  standalone: true,
  imports: [ContactInfoComponent, KnowledgeComponent, LanguagesComponent, SocialComponent, HobbiesComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

}
