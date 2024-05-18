import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatLabel } from '@angular/material/input';
import { MatOption } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MatInputModule, // MatInputModule importálása
    MatDatepickerModule,
    MatNativeDateModule, 
    MatLabel,
    MatSelectModule, 
    MatOption,
    MatIconModule

  ]
})
export class LandingPageModule { }
