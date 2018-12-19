import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {
	signinForm = new FormGroup({
		email: new FormControl(''),
    password: new FormControl('')
	});

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSignin(form: NgForm) {
    form.value['isAdmin'] = false;
  	const email = form.value.email;
    const password = form.value.password;
  	this.authService.signinUser(email, password);
  }

}
