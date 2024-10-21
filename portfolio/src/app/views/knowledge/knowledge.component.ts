import { Component } from '@angular/core';
import { PersonalBlockComponent } from "../../utils/personal-block/personal-block.component";
import { knowledgeList } from '../../../../public/assets/information/knowledgeList';
import { Knowledge } from '../../../interfaces/knowledge';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'knowledge',
  standalone: true,
  imports: [PersonalBlockComponent, TranslateModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  knowledgeList: Knowledge[] = this.sortKnowledgeList(knowledgeList);

  parseKnowledgeListToStringList(knowledgeList: Knowledge[]): string[] {
    return knowledgeList.map(knowledge => knowledge.field);
  }

  sortKnowledgeList(knowledgeList: Knowledge[]): Knowledge[] {
    return knowledgeList.sort((a, b) => {
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
