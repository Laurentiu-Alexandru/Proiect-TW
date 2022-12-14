import { Component } from '@angular/core';
import { DatabaseService } from '../../database-service/database.service';
import { Restaurant } from '../../database-service/restaurant';
import { Produs } from '../../database-service/produs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-restaurant',
  templateUrl: './details-restaurant.component.html',
  styleUrls: ['./details-restaurant.component.css']
})
export class DetailsRestaurantComponent {

  constructor(
    private json: DatabaseService,
    private route: ActivatedRoute
  ) { }

  restaurants: Restaurant[] = [];
  produse: Produs[] = [];
  restaurantName: string = '';


  setProduse() {
    for (let i of this.restaurants) {
      if (i.name == this.restaurantName) {
        for (let j = 0; j < i.produse.length; j++) {
          this.produse.push(i.produse[j]);
          console.log(this.produse);
        }
      }
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.restaurantName = params['restaurant'];
    });

    this.json.getRestaurants().subscribe((restaurants: Restaurant[]) => {
      this.restaurants = restaurants;
      this.setProduse();
      console.log(restaurants)
    })
  }


}
