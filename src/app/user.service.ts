import { Injectable } from '@angular/core';
import { user } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


    users: user[] = [];

    getUser() {
      return this.users;
    }

    addUsers(user: user){
      this.users.push(user);
    }
}
