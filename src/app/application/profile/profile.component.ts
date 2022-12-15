import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/auth/auth.service';
import { DatabaseService } from 'src/app/database-service/database.service';
import { User } from 'src/app/database-service/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthentificationService,
    private json: DatabaseService,

  ) {}

    User: User = this.auth.User;
  ngOnInit(): void {

  }
}
