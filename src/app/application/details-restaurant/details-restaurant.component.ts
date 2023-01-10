import { Component } from '@angular/core';
import { DatabaseService } from '../../database-service/database.service';
import { Restaurant } from '../../database-service/restaurant';
import { Produs } from '../../database-service/produs';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/database-service/user';
import { Comanda } from 'src/app/database-service/comanda';

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

  user_id = JSON.parse(sessionStorage.getItem("user_id") || '{}');

  User: User = {
    id: 0,
    username: '',
    cos: [],
    comenzi: []
  };

  cos: Produs[] =[];

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.restaurantName = params['restaurant'];
    });

    this.json.getRestaurants().subscribe((restaurants: Restaurant[]) => {
      this.restaurants = restaurants;
      this.setProduse();
      console.log(restaurants);
    });

    this.json.getUser(this.user_id).subscribe((user: User) => {
      this.User= user;
      console.log("User: ",this.User);
      this.cos = this.produse;
      console.log("Comenzi: ",this.cos)

    });
  }

  addProdusToCart(produs: Produs) {




    this.router.navigate(['../../', 'cos'], {
      queryParams: { produs: produs },
      relativeTo: this.route,
    });
  }
}
