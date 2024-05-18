import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormControl('')
  });

  constructor(private location: Location, private authServie: AuthService, private router: Router) { }

  onSubmit() {
    this.authServie.signup(this.signUpForm.get('email')?.value as string, this.signUpForm.get('password')?.value as string).then(asd =>{
    this.router.navigateByUrl('/landing-page');

    }).catch(error =>{
      console.error(error);
    });
  }

  goBack() {
    this.location.back();
  }

}
