import { Component } from '@angular/core';
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
  constructor(private auth: AuthentificationService, private db: DatabaseService) { }
  user_id = JSON.parse(sessionStorage.getItem("user_id") || '{}');

  User: User = {
    id: 0,
    username: '',
    cos: [],
    comenzi: []
  };

  produse: Produs[] =[];

  ngOnInit(): void {
    this.db.getUser(this.user_id).subscribe((user: User) => {
      this.User= user;
      console.log("User: ",this.User)
      this.produse = user.cos
      console.log("Produse: ",this.produse)

    });
   }
}

