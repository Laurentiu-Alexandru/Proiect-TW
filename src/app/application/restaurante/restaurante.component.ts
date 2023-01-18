import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../../database-service/restaurant';
import { DatabaseService } from '../../database-service/database.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent {

  restaurants: Restaurant[] =  []

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private json: DatabaseService,

  ) {}

  ngOnInit(): void {
    this.json.getRestaurants().subscribe((restaurants: Restaurant[])=>{
      this.restaurants = restaurants;
      console.log(restaurants)
    })
  }
  gotoRinder(){
    this.router.navigate(['ridner']);
  }
  goToRestaurant(name: String) {
    this.router.navigate(['../','restaurante', 'service'], { queryParams: { restaurant: name}, relativeTo: this.route});
  }

}
