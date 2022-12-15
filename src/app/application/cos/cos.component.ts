import { Component } from '@angular/core';
import { AuthentificationService } from 'src/app/auth/auth.service';
import { Produs } from 'src/app/database-service/produs';

@Component({
  selector: 'app-cos',
  templateUrl: './cos.component.html',
  styleUrls: ['./cos.component.css']
})
export class CosComponent {


  constructor( private auth: AuthentificationService){}
  produse: Produs[] = this.auth.User.cos;

  ngOnInit(): void {
    console.log(this.produse);
  }

}
