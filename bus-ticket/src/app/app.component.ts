import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'bus-ticket';
  bejelentkezettUser?: firebase.default.User | null;

  constructor(private router: Router, private autService: AuthService) { }

  navigateToLandingPage() {
    this.router.navigate(['/landing-page']);
  }

  ngOnInit(){
  
    this.autService.isUserLoggedIn().subscribe(user =>{
      this.bejelentkezettUser = user;
      localStorage.setItem('user', JSON.stringify(this.bejelentkezettUser));
    }), (error: any) => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify(null));
    }
  
  }
  logout(_?: boolean){
    this.autService.logout().then(() =>{
      console.log('Kijelentkeztél!')
    }).catch(error =>
      console.error(error)
    );
  }
}



