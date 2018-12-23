import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { User } from '../user.model';
import { UserService } from './user.service';

import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  token: string;

  users: AngularFireList<User>;
	user: Observable<firebase.User>;
  userDetails: firebase.User = null;
  loggedUser;
  dbUser;
  private dbPath = 'client';

	constructor(private firebaseAuth: AngularFireAuth,
              private router: Router,
              private db: AngularFireDatabase,
              private userService: UserService) {
		this.user = firebaseAuth.authState;
    this.dbUser = new User();
    this.user.subscribe(user => {
      if (user) {
        this.userDetails = user;
        userService
          .isAdmin(this.userDetails.email)
          .snapshotChanges()
          .subscribe(data => {
            data.forEach(el => {
              const y = el.payload.toJSON();
              this.dbUser = y;
            });
          });
      } else {
        this.userDetails = null;
      }
    });
	}

  getLoggedInUser(): User {
    const loggedUser: User = new User();
    const user = this.firebaseAuth.auth.currentUser;

    if (user) {
      this.userDetails = user;
      if(user !=null) {
        loggedUser.key = user.uid;
        loggedUser.email = user.email;
        loggedUser.isAdmin = this.dbUser['isAdmin'];
      }
    } else {
      this.userDetails = null;
    }

    return loggedUser;
  }

	signupUser(email: string, password: string) {
		this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password).then((value) => {
		  console.log('Success!', value),
      alert('Great');
      this.router.navigate(['/']);
    })
	}

	signinUser(email: string, password: string) {
		this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
			.then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            )
        }
        )

	}

  isLoggedIn(): boolean {
    if (this.userDetails !== null) {
      return true;
    }
  }

	logout() {
		this.firebaseAuth.auth.signOut();
    this.token = null;
	}

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

   createUser(data: any) {
    data.isAdmin = false;
    this.users.push(data);
  }

  isAdmin() : boolean {
    const user = this.getLoggedInUser();
    if (user !=null) {
      if (user.isAdmin === true) {
        return true;
      }
    }
  }

}

