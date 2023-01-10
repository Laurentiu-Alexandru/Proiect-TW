import { Component } from '@angular/core';
import { AuthentificationService } from 'src/app/auth/auth.service';
import { Produs } from 'src/app/database-service/produs';
import { Comanda } from 'src/app/database-service/comanda';
import { User } from 'src/app/database-service/user';
import { DatabaseService } from '../../database-service/database.service';

@Component({
  selector: 'app-comenzi',
  templateUrl: './comenzi.component.html',
  styleUrls: ['./comenzi.component.css'],
})
export class ComenziComponent {
  constructor(private auth: AuthentificationService, private db: DatabaseService) { }
  user_id = JSON.parse(sessionStorage.getItem("user_id") || '{}');

  User: User = {
    id: 0,
    username: '',
    cos: [],
    comenzi: []
  };

  comenzi: Comanda[] =[];

  ngOnInit(): void {
    this.db.getUser(this.user_id).subscribe((user: User) => {
      this.User= user;
      console.log("User: ",this.User)
      this.comenzi = user.comenzi
      console.log("Comenzi: ",this.comenzi)

    });
    console.log("  Comenzi: ",this.comenzi[0].pret )}
}
