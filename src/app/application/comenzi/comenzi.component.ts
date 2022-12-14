import { Component } from '@angular/core';
import { AuthentificationService } from 'src/app/auth/auth.service';
import { Produs } from 'src/app/database-service/produs';

@Component({
  selector: 'app-comenzi',
  templateUrl: './comenzi.component.html',
  styleUrls: ['./comenzi.component.css'],
})
export class ComenziComponent {
  constructor(private auth: AuthentificationService) {}
  produse: Produs[] = this.auth.User.comenzi;
  cos: Produs [] =this.auth.User.comenzi;
  ngOnInit(): void {}
}
