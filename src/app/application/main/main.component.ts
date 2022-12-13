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

  onRezerva(){
    this.router.navigate(['../','restaurante'], {relativeTo: this.route});
  }

  goToRestaurant(name: String) {
    this.router.navigate(['../','restaurante', name], {relativeTo: this.route});
 }

}
