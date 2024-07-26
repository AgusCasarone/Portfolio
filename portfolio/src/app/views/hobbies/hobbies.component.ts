import { Component } from '@angular/core';
import { hobbyList } from '../../../../public/assets/information/hobbyList';
import { Hobby } from '../../../interfaces/hobby';

@Component({
  selector: 'hobbies',
  standalone: true,
  imports: [],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss'
})
export class HobbiesComponent {

  hobbyList: Hobby[] = this.sortHobbyList(hobbyList);

  sortHobbyList(hobbyList: Hobby[]): Hobby[] {
    return hobbyList.sort((a, b) => {
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
