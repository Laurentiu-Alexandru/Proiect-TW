import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthentificationService } from '../auth.service';
import { DatabaseService } from '../../database-service/database.service';
import { User } from '../../database-service/user';

import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  onSnapshot,
  addDoc,
  collection,
  getDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDZ273ywvo3Jzs4UUy7KIUiGCTUDCA6aqs',
  authDomain: 'proiect-tw01.firebaseapp.com',
  databaseURL:
    'https://proiect-tw01-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'proiect-tw01',
  storageBucket: 'proiect-tw01.appspot.com',
  messagingSenderId: '775115098883',
  appId: '1:775115098883:web:8bdd45ae8448e50492b736',
  measurementId: 'G-JZT5TWN5T3',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users: User[] = [];
  newUser: User = {
    id: 0,
    username: '',
    email: '',
    password: '',
  };

  constructor(
    private router: Router,
    private auth: AuthentificationService,
    private json: DatabaseService
  ) {}

  ngOnInit(): void {
    this.json.getUsers().subscribe((user: User[]) => (this.users = user));
  }

  authUser(form: NgForm) {
    const username_input = document.getElementById('username');
    const password_input = document.getElementById('password');

    const value = form.value;

    const username = value.username;
    const password = value.password;
    const remember = value.remember;

    for (let i = 0; i < this.users.length; i++) {
      if (
        username == this.users[i].username &&
        password == this.users[i].password
      ) {
        this.auth.User_ID = this.users[i].id;

        username_input!.classList.add('is-valid');

        this.router.navigate(['main']);
        console.log('Id: ' + this.auth.User_ID);
      }
      if (username != this.users[i].username) {
        username_input!.classList.add('is-invalid');
      }
      if (password != this.users[i].password) {
        password_input!.classList.add('is-invalid');
        username_input!.classList.add('is-invalid');
      }
    }
  }
}
