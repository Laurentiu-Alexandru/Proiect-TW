import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../../database-service/database.service';
import { Restaurant } from '../../database-service/restaurant';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  restaurants: Restaurant[] = [];
  restaurants_comanda: Restaurant[] = [];
  restaurants_rezervare: Restaurant[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private json: DatabaseService,

  ) { }

  ngOnInit(): void {
    this.json.getRestaurants().subscribe((restaurants: Restaurant[]) => {
      this.restaurants = restaurants;
      //console.log(restaurants)
      for(let restaurant of restaurants)
      {
        this.checkType(restaurant);
      }
   
    })
  }

  onRezerva() {
    this.router.navigate(['../', 'restaurante'], { relativeTo: this.route });
  }

  goToRestaurant(name: String) {
    this.router.navigate(['../', 'restaurante', 'service'], { queryParams: { restaurant: name }, relativeTo: this.route });
  }

  checkType(restaurant: Restaurant) {
    if (restaurant.type == "comanda") {
      this.restaurants_comanda.push(restaurant);
      this.sortResturants(this.restaurants_comanda);
    }
    else if (restaurant.type == "rezervare") {
      this.restaurants_rezervare.push(restaurant);
      this.sortResturants(this.restaurants_rezervare);
    }
  }

  sortResturants(restaurante: Restaurant[]){
   {
       for(let i = 0; i < restaurante.length - 1; i++)
       {
           let min = i;
           
           for(let j = i + 1; j < restaurante.length; j++)
           {
               if(restaurante[j].rating > restaurante[min].rating)
               {
                   min = j;
               }
           }
           const tmp = restaurante[min];
           restaurante[min] = restaurante[i];
           restaurante[i] = tmp;
       }
   }
  }

}
