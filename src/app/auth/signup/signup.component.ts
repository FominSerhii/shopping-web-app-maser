import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

import { User } from '../../user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  users: Observable<any>;

  constructor(private authService: AuthService,
              private db: AngularFireDatabase) {
    this.users = db.list('client').valueChanges();
  }

  ngOnInit() {}

  onSignup(form: NgForm) {
    form.value['isAdmin'] = false;
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
    this.db.list('/client').push({Email: email,Passwod: password, isAdmin: false});
  }

}
