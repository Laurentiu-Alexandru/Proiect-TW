import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

import { getFirestore } from 'firebase/firestore';

import { User } from './user';
import { Restaurant } from './restaurant';
import { Produs } from './produs';
import { Comanda } from './comanda';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  // GET- citeste din json
  // POST- adauga in json
  // PATCH- face update la un element dupa id din json
  // PUT si PATCH fac cam aceleasi lucruri
  // DELETE- sterge elementul dupa id din json

  // apiUrl_users =
    // 'https://proiect-tw01-default-rtdb.europe-west1.firebasedatabase.app/users';


    apiUrl_users = 'http://localhost:5000/users';
    apiUrl_restaurants = 'http://localhost:5000/restaurants';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl_users);
  }

  getUser(User_Id: number): Observable<User> {
    const user_url = `${this.apiUrl_users}/${User_Id}`;
    return this.http.get<User>(user_url);
  }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.apiUrl_restaurants);
  }

  getRestaurant(Restaurant_Id: number): Observable<Restaurant> {
    const apiUrl_restaurants = `${this.apiUrl_restaurants}/${Restaurant_Id}`;
    return this.http.get<Restaurant>(apiUrl_restaurants);
  }

  updateUser(user: User): Observable<User>  {
    const user_url = `${this.apiUrl_users}/${user.id}`;
    return this.http.patch<User>(user_url, user, httpOptions);
  }

  updateCos(user: User, cos: Produs[]): Observable<User>  {
    const user_url = `${this.apiUrl_users}/${user.id}`;
    return this.http.patch<User>(user_url, cos, httpOptions);
  }

  updateComenzi(user: User, comenzi: Comanda[]): Observable<User>  {
    const user_url = `${this.apiUrl_users}/${user.id}`;
    return this.http.patch<User>(user_url, comenzi, httpOptions);
  }
}
