import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../../database-service/restaurant';
import { DatabaseService } from '../../database-service/database.service';
import { Card } from 'src/app/database-service/card';
import { User } from 'src/app/database-service/user';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent {

  restaurants: Restaurant[] =  []

  user_id = JSON.parse(sessionStorage.getItem("user_id") || '{}');

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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private db: DatabaseService,

  ) {}

  ngOnInit(): void {


    this.db.getRestaurants().subscribe((restaurants: Restaurant[])=>{
      this.restaurants = restaurants;
      console.log(restaurants)

      this.db.getUser(this.user_id).subscribe((user: User) => {
        this.User = user;
        console.log(this.User)

        for(let i of this.User.preferences){
          let filter = document.getElementById(i);
          filter?.classList.add("show");
        }
      });

    });
  }
  gotoRinder(){
    this.router.navigate(['rinder']);
  }
  goToRestaurant(name: string, id: number) {
    this.router.navigate(['../','restaurante', name], { queryParams: { restaurant: name, restaurant_id: id}, relativeTo: this.route});
  }

}
