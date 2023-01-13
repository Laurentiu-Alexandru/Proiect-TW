import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/auth/auth.service';
import { Card } from 'src/app/database-service/card';
import { DatabaseService } from 'src/app/database-service/database.service';
import { Produs } from 'src/app/database-service/produs';
import { User } from 'src/app/database-service/user';

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

  Plateste(form: NgForm){

    const name_input = document.getElementById('fname');
    const email_input = document.getElementById('email');
    const address_input = document.getElementById('adr');
    const cardname_input = document.getElementById('cname');
    const cardnumber_input = document.getElementById('ccnum');
    const expirationdate_input = document.getElementById('expdate');
    const cvv_input = document.getElementById('cvv');

    const value = form.value;

    const name = value.fname;
    const email = value.email;
    const adr = value.adr;
    const cname = value.cname;
    const ccnum = value.ccnum;
    const expdate = value.expdate;
    const cvv = value.cvv;

    this.user_card.Owner_Name=cname;
    this.user_card.Card_Number =ccnum;
    this.user_card.Expiration_Date=expdate;
    this.user_card.CVV=cvv;

    this.User.Adress=adr;

    this.db.updateUser(this.User).subscribe(( )=>{this.router.navigate(['loading']);});

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
