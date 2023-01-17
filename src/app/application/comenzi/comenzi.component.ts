import { Component } from '@angular/core';
import { AuthentificationService } from 'src/app/auth/auth.service';
import { Produs } from 'src/app/database-service/produs';
import { User } from 'src/app/database-service/user';
import { DatabaseService } from '../../database-service/database.service';
import { Card } from 'src/app/database-service/card';

@Component({
  selector: 'app-comenzi',
  templateUrl: './comenzi.component.html',
  styleUrls: ['./comenzi.component.css'],
})
export class ComenziComponent {
  constructor(private auth: AuthentificationService, private db: DatabaseService) { }
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
  comenzi: Produs[] = [];

  ngOnInit(): void {
    this.db.getUser(this.user_id).subscribe((user: User) => {
      this.User= user;
      console.log("User: ",this.User)
      this.comenzi = user.comenzi
      console.log("Comenzi: ",this.comenzi)

    });
  }
}
