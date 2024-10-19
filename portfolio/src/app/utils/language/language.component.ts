import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'profile-language',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss'
})
export class LanguageComponent {

  isTranslating: boolean = false;

  translate: TranslateService = inject(TranslateService);

  title = 'portfolio';

  changeLanguage(lang: string) {
    this.isTranslating = false;
    this.translate.use(lang);
  }

}
