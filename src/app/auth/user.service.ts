import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = new User();
  users: AngularFireList<User>;
  private dbPath = 'client';

  constructor(private db: AngularFireDatabase) {
    this.getUsers();
  }

  getUsers() {
    this.users = this.db.list(this.dbPath);
    return this.users;
  }

  createUser(data: any) {
    data.isAdmin = false;
    this.users.push(data);
  }

  isAdmin(email: string) {
    return this.db.list(this.dbPath, ref =>
      ref.orderByChild('email').equalTo(email)
    );
  }

}
