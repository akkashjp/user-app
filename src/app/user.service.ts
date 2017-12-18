import { Injectable } from '@angular/core';
import {UserComponent} from './user/user.component';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


@Injectable()
export class UserService {

  constructor(private http: Http) { }

  createUser(user) {
    return this.http.post('http://localhost:3000/user', user ).map((response: Response) => response.json());
  }

  updateUser(id,user) {
    return this.http.put('http://localhost:3000/user/' + id, user ).map((response: Response) => response.json());
  }

  getUserById(id) {
    console.log(id);
    return this.http.get('http://localhost:3000/user/' + id).map((response: Response) => response.json());

  }

  getAllUser() {
    console.log('inside get all user service');
    return this.http.get('http://localhost:3000/user').map((response: Response) => response.json());
  }


}
