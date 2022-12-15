import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/auth/auth.service';
import { Produs } from 'src/app/database-service/produs';

@Component({
  selector: 'app-plateste',
  templateUrl: './plateste.component.html',
  styleUrls: ['./plateste.component.css']
})
export class PlatesteComponent {

  constructor( private auth: AuthentificationService){}
  produse: Produs[] = this.auth.User.cos;

  ngOnInit(): void {
    console.log(this.produse);
  }
}
