import { Component, OnInit, Input } from '@angular/core';
import { trigger, keyframes, animate, transition } from "@angular/animations";
import * as kf from './keyframes';
import { Subject } from 'rxjs';
import { Restaurant } from 'src/app/database-service/restaurant';
import { DatabaseService } from 'src/app/database-service/database.service';
import { Router } from '@angular/router';


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

  public restaurants: Restaurant[] = [];
  public index = 0;
  @Input()
  parentSubject!: Subject<any>;



  animationState!: string;
  constructor(private json: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.parentSubject.subscribe(event => {
      this.startAnimation(event)
    });

    this.json.getRestaurants().subscribe((restaurants: Restaurant[])=>{
      this.restaurants = restaurants;
      console.log(restaurants)
    })
  }

  startAnimation(state: string) {
    if (!this.animationState) {
      this.animationState = state;
      this.restaurants.shift();
    }
    if(this.restaurants.length == 0){
      this.router.navigate(['main']);
    }

    if(state == "swipeleft"){
      console.log("X")
    }
    if(state == "swiperight"){
      console.log("<3")
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
