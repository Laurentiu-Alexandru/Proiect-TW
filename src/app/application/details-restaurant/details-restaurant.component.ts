import { Component } from '@angular/core';
import { DatabaseService } from '../../database-service/database.service';
import { Restaurant } from '../../database-service/restaurant';
import { Produs } from '../../database-service/produs';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/database-service/user';
import { Card } from 'src/app/database-service/card';

@Component({
  selector: 'app-details-restaurant',
  templateUrl: './details-restaurant.component.html',
  styleUrls: ['./details-restaurant.component.css'],
})
export class DetailsRestaurantComponent {
  produse: Produs[] = []

  restaurant: Restaurant = {
    id: 0,
    name: '',
    type: '',
    rating: 0,
    location: '',
    produse: this.produse,
    banner_img: '',
    filtre: '',
  };

  constructor(
    private db: DatabaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  restaurants: Restaurant[] = [];
  restaurantName: string = '';


  user_id = JSON.parse(sessionStorage.getItem("user_id") || '{}');

  user_card: Card={
    Owner_Name: '',
    Card_Number: '',
    Expiration_Date: '',
    CVV: 0,
  }

  User: User = {
    id: 0,
    username: '',
    cos: [],
    comenzi: [],
    card: this.user_card,
    Adress: '',
  };
  cos: Produs[] =[];

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.restaurantName = params['restaurant'];
    });

    this.db.getRestaurants().subscribe((restaurants: Restaurant[]) => {
      this.restaurants = restaurants;
      console.log(restaurants);
    });

    this.db.getUser(this.user_id).subscribe((user: User) => {
      this.User = user;

      console.log("User: ", this.User);
      this.cos = user.cos;
      console.log("Cos: ", this.cos);
    });
  }

  addProdusToCart(produs: Produs) {

    let k:number = 1;
    for(let p in this.User.cos){

      k=k+1;
    }

    produs.id = k;
    produs.restaurant=this.restaurantName
    this.User.cos.push(produs);
    this.db.updateUser(this.User).subscribe(()=>{console.log('Update User');
    console.log(this.User.cos);
    this.cos.filter((e) => e.id === produs.id);

    this.router.navigate(['../../', 'cos'], {
      queryParams: { produs: produs.nume },
      relativeTo: this.route,
    });

  });


  }
}
