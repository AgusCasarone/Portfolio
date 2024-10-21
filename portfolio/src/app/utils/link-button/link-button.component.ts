import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'link-button',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.scss'
})
export class LinkButtonComponent implements OnInit {

  @Input() link?: string = "";
  @Input() design?: boolean;
  @Input() repository?: boolean;

  image: string = "";

  ngOnInit(): void {
    this.image= this.repository ? "assets/icons/github.png" :
    this.design ? "assets/icons/figma.png" :
        "assets/icons/link.png";
  }
}
