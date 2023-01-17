import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/auth/auth.service';
import { Card } from 'src/app/database-service/card';
import { DatabaseService } from 'src/app/database-service/database.service';
import { User } from 'src/app/database-service/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
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


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthentificationService,
    private db: DatabaseService,

  ) {}

   username = sessionStorage.getItem("username");

  ngOnInit(): void {
    this.db.getUser(this.user_id).subscribe((user: User) => {
      this.User = user;
    });
  }

  Delete(){
    this.db.deleteUser(this.User).subscribe(( )=>{
      console.log(this.User);
      this.router.navigate(['login']);
    });


  }
}
