import { Component } from '@angular/core';
import { DatabaseService } from '../../database-service/database.service';
import { Restaurant } from '../../database-service/restaurant';
import { Produs } from '../../database-service/produs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-restaurant',
  templateUrl: './details-restaurant.component.html',
  styleUrls: ['./details-restaurant.component.css'],
})
export class DetailsRestaurantComponent {
  restaurant: Restaurant = {
    id: 0,
    name: '',
    type: '',
    rating: 0,
    location: '',
    produse: [
      {
        id: 0,
        nume: '',
        ingrediente: '',
        produs_img: '',
        pret: 0,
      },
    ],
    banner_img: '',
    specialitate: '',
  };

  constructor(
    private json: DatabaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

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
    this.route.queryParams.subscribe((params) => {
      this.restaurantName = params['restaurant'];
    });

    this.json.getRestaurants().subscribe((restaurants: Restaurant[]) => {
      this.restaurants = restaurants;
      this.setProduse();
      console.log(restaurants);
    });
  }

  addProdusToCart(produs: string) {
    this.router.navigate(['../../', 'cos'], {
      queryParams: { produs: produs },
      relativeTo: this.route,
    });
  }
}
