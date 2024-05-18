import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil.component';
import { ProfilRoutingModule } from './profil.routing.module';
import { UserService } from '../../services/user.service';
import {MatTableModule} from '@angular/material/table';
import { User } from '../../models/User';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [ProfilComponent],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    MatTableModule,
    MatDividerModule,
    MatListModule
  ]
})
export class ProfilModule { }
