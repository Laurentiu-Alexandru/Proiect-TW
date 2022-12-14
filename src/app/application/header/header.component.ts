import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthentificationService } from 'src/app/auth/auth.service';
import { DatabaseService } from 'src/app/database-service/database.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  User_ID = 0;
  Username = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthentificationService,
    private json: DatabaseService
  ) {}

  ngOnInit(): void {
  }

  getUsername(){
    return sessionStorage.getItem('username');
  }
}
