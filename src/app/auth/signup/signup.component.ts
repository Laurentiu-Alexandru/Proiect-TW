import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickSignup_signup(form: NgForm) {
    const username_input = document.getElementById('username');
    const email_input = document.getElementById('email');
    const password_input = document.getElementById('password');
    const re_password_input = document.getElementById('re_password');

    const value = form.value;

    const pattern = '^[A-Za-z0-9]+@[a-z]+.[a-z]{2,3}';

    this.router.navigate(['login']);
  }
}
