import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/auth/auth.service';
import { Card } from 'src/app/database-service/card';
import { DatabaseService } from 'src/app/database-service/database.service';
import { Produs } from 'src/app/database-service/produs';
import { User } from 'src/app/database-service/user';
import { CardComponent } from '../rinder/card/card.component';

@Component({
  selector: 'app-plateste',
  templateUrl: './plateste.component.html',
  styleUrls: ['./plateste.component.css']
})
export class PlatesteComponent {

  constructor(private auth: AuthentificationService, private db: DatabaseService, private router: Router,
    private route: ActivatedRoute,) { }
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

  pret: number = 0;
  produse: Produs[] =[];

  comenzi_updated: Produs[] = [];


  Plateste(form: NgForm){

    const value = form.value;

    const name = value.fname;
    const email = value.email;
    const adr = value.adr;
    const cname = value.cname;
    const ccnum = value.ccnum;
    const expdate = value.expdate;
    const cvv = value.cvv;

    this.User.card.Owner_Name = cname;
    this.User.card.Card_Number = ccnum;
    this.User.card.Expiration_Date = expdate;
    this.User.card.CVV = cvv;

    this.User.Adress=adr;


    this.comenzi_updated = this.User.comenzi;

    for(let i = 0; i < this.User.cos.length; i++){
      if(this.User.comenzi != undefined){
        this.User.comenzi.push(this.User.cos[i])
      }
      console.log("Wololooo")
      this.db.updateComenzi(this.User, this.User.cos[i]).subscribe(( )=>{
        console.log(this.User);

    });
    }
    let k = this.User.cos.length;
    for(let i = 0; i < k; i++){
      this.User.cos.pop();
    }
    this.db.deleteCos(this.User).subscribe(( )=>{
      console.log(this.User);
    });

    this.router.navigate(['loading']);

  }

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
