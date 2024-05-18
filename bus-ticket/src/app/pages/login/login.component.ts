import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy{
 
  constructor (private router: Router, private authService: AuthService) {}

  email = new FormControl('');
  password = new FormControl('');
    
    /*
    tesztfelhasznalo:
    email: test@gmail.com
    jelszó: testpw 
    */
    loadingSubscription?: Subscription;

    loading: boolean = false;
   async login(){
    this.loading = true;
    this.authService.login(this.email.value as string, this.password.value as string).then(asd => {
      this.router.navigateByUrl('/landing-page');
    }).catch(error =>{
      console.error(error);
      this.loading = false;
    });

  }
  ngOnDestroy(): void {
    this.loadingSubscription?.unsubscribe();
    console.log('Meg van hívva!');
  }
}
