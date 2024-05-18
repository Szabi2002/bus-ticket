import { Component, OnInit  } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'

  
})
export class ProfilComponent implements OnInit{

  user: User | any;


  constructor(private angularFireStore: AngularFirestore, private userService: UserService, private autService: AuthService, private router: Router ) { }
  
 
  isHighlighted: boolean = true;


  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    if (user) {
      this.userService.readByID(user.uid).subscribe({
        next: data => {
          console.log('Működik!');
          this.user = data; 
          console.log(data);
        },
        error: error => {
          console.error(error);
        },
        complete: () => {
          console.log('Lekérdezés befejezve');
        }
      });
    }

  }
    remove(user: User){
      this.userService.removeUser(user.uid);
        console.log('A felhasználó törlésre került:' , user.name);
    }

    logout(_?: boolean){
      this.autService.logout().then(() =>{
        console.log('Kijelentkeztél!');
        this.router.navigateByUrl('/login');
      }).catch(error =>
        console.error(error)
      );
    }
}
