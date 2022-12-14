import { Injectable } from '@angular/core';
import { User } from '../database-service/user';

@Injectable()
export class AuthentificationService {

  User: User  = {
    id: 0,
    username: "",
    cos:[],
    comenzi: []
}

  constructor(){}

  ngOnInit(): void {
  }


}
