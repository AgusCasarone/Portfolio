import { Component } from '@angular/core';
import { PersonalBlockComponent } from "../../utils/personal-block/personal-block.component";
import { knowledgeList } from '../../../../public/assets/information/knowledgeList';
import { Knowledge } from '../../../interfaces/knowledge';

@Component({
  selector: 'knowledge',
  standalone: true,
  imports: [PersonalBlockComponent],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  knowledgeList: Knowledge[] = knowledgeList;

  parseKnowledgeListToStringList(knowledgeList: Knowledge[]): string[] {
    return knowledgeList
      .sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity))
      .map(knowledge => knowledge.field);
  }

}
