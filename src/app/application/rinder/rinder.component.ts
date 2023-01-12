import { Component } from '@angular/core';
import { Subject} from 'rxjs';

@Component({
  selector: 'app-rinder',
  templateUrl: './rinder.component.html',
  styleUrls: ['./rinder.component.css']
})
export class RinderComponent {
  parentSubject:Subject<string> = new Subject();

  constructor() {}

  cardAnimation(value: any) {
    this.parentSubject.next(value);
  }
}
