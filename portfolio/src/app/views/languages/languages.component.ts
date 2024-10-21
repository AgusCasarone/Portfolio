import { Component } from '@angular/core';
import { languagesList } from '../../../../public/assets/information/languagesList';
import { Language } from '../../../interfaces/language';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'languages',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss'
})
export class LanguagesComponent {

  languagesList: Language[] = this.sortLanguageList(languagesList);

  parseLanguageListToStringList(languageList: Language[]): string[] {
    return languageList.map(language => language.language);
  }

  sortLanguageList(languageList: Language[]): Language[] {
    return languageList.sort((a, b) => {
      if (a.order !== undefined && b.order !== undefined) {
        return a.order - b.order;
      } else if (a.order !== undefined) {
        return -1;
      } else if (b.order !== undefined) {
        return 1;
      } else {
        return 0;
      }
    });
  }

}
