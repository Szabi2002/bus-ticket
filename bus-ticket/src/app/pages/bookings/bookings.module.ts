import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsRoutingModule } from './bookings.routing.module';
import { BookingsComponent } from './bookings.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [BookingsComponent],
  imports: [
    CommonModule,
    BookingsRoutingModule, 
    MatCardModule
  ]
})
export class BookingsModule { }
