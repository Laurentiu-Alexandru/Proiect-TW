import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/auth/auth.service';
import { DatabaseService } from 'src/app/database-service/database.service';
import { Produs } from 'src/app/database-service/produs';
import { User } from 'src/app/database-service/user';

@Component({
  selector: 'app-plateste',
  templateUrl: './plateste.component.html',
  styleUrls: ['./plateste.component.css']
})
export class PlatesteComponent {

  constructor(private auth: AuthentificationService, private db: DatabaseService) { }
  user_id = JSON.parse(sessionStorage.getItem("user_id") || '{}');

  User: User = {
    id: 0,
    username: '',
    cos: [],
    comenzi: []
  };

  pret: number = 0;
  produse: Produs[] =[];


  ngOnInit(): void {
    this.db.getUser(this.user_id).subscribe((user: User) => {
      this.User= user;
      console.log("User: ",this.User)
      this.produse = user.cos
      console.log("Produse: ",this.produse)

      for(let i of this.User.cos){
        this.pret = this.pret + i.pret;
      }
      console.log("pret Total:", this.pret);
    });
   }
}
