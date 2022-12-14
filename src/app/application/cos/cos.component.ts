import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/auth/auth.service';
import { Comanda } from 'src/app/database-service/comanda';
import { DatabaseService } from 'src/app/database-service/database.service';
import { Produs } from 'src/app/database-service/produs';
import { User } from 'src/app/database-service/user';

@Component({
  selector: 'app-cos',
  templateUrl: './cos.component.html',
  styleUrls: ['./cos.component.css'],
})
export class CosComponent {
  constructor(private auth: AuthentificationService, private db: DatabaseService, private router: Router,
    private route: ActivatedRoute) { }
  user_id = JSON.parse(sessionStorage.getItem("user_id") || '{}');

  User: User = {
    id: 0,
    username: '',
    cos: [],
    comenzi: []
  };

  pret: number = 0;
  k: number = 0;
  produse: Produs[] = [];

  cos_nou: Produs[] = [];

  deleteProdus(produs:Produs){

    for(let i of this.produse){
      if(i == produs){
        console.log("found it!")
      }
      if(i != produs){
        this.cos_nou.push(i);
      }
    }
    this.User.cos= this.cos_nou
    this.db.updateUser(this.User).subscribe(( )=>{ window.location.reload();});


  }

  ngOnInit(): void {
    this.db.getUser(this.user_id).subscribe((user: User) => {
      this.User= user;
      console.log("User: ",this.User)
      this.produse = user.cos
      console.log("Produse: ",this.produse)

      for(let i of this.User.cos){
        this.pret = this.pret + i.pret;
        this.k= this.k+1;
      }
      console.log("pret Total:", this.pret);
    });
   }
}

