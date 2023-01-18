import { Component, OnInit, Input } from '@angular/core';
import { trigger, keyframes, animate, transition } from "@angular/animations";
import * as kf from './keyframes';
import { Subject } from 'rxjs';
import { Restaurant } from 'src/app/database-service/restaurant';
import { DatabaseService } from 'src/app/database-service/database.service';
import { Router } from '@angular/router';
import { Filter } from 'src/app/database-service/filter';
import { Card } from 'src/app/database-service/card';
import { User } from 'src/app/database-service/user';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(kf.swiperight))),
      transition('* => swipeleft', animate(750, keyframes(kf.swipeleft)))
    ])
  ]

})
export class CardComponent {

  user_id = JSON.parse(sessionStorage.getItem("user_id") || '{}');
  public filters: Filter[] = [];
  public index = 0;
  @Input()
  parentSubject!: Subject<any>;

  user_filter_profile: string[] = [];

  user_card: Card={
    Owner_Name: '',
    Card_Number: '',
    Expiration_Date: '',
    CVV: 0,
  }

  preferences: string[] =[]

  User: User = {
    id: 0,
    username: '',
    cos: [],
    comenzi: [],
    card: this.user_card,
    preferences: this.preferences,
    Adress: '',
  };

  animationState!: string;
  constructor(private json: DatabaseService, private router: Router, private db: DatabaseService) { }

  ngOnInit() {
    this.parentSubject.subscribe(event => {
      this.startAnimation(event)
    });

    this.json.getFilters().subscribe((filters: Filter[])=>{
      this.filters = filters;
      console.log(filters)
    })

    this.db.getUser(this.user_id).subscribe((user: User) => {
      this.User = user;
      console.log("User: ",this.User)

    });
  }

  startAnimation(state: string) {
    if (!this.animationState) {
      this.animationState = state;

    }
    if(this.filters.length == 0){
      this.router.navigate(['restaurante']);
      console.log(this.user_filter_profile)
      this.User.preferences = this.user_filter_profile;
      this.db.updateUser(this.User).subscribe(( )=>{
        console.log(this.User);

    });

    }

    if(state == "swipeleft"){
      console.log(this.filters[0].filter_name,"X")
      this.filters.shift();
    }
    if(state == "swiperight"){
      this.user_filter_profile.push(this.filters[0].filter_name);
      console.log(this.filters[0].filter_name,"<3")
      this.filters.shift();
    }

  }

  resetAnimationState(state: any) {
    this.animationState = '';
    this.index++;
  }


  ngOnDestroy() {
    this.parentSubject.unsubscribe();
  }

}
