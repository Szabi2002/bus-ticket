import { Component, OnInit } from '@angular/core';
import { Booking } from '../../models/Booking';
import { BookingService } from '../../services/booking.service';
import { TicketService } from '../../services/ticket.service';
import { Observable } from 'rxjs';
import { Ticket } from '../../models/Ticket';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent implements OnInit{

  
  
  product!: Observable<Booking[]>;

  constructor( 
    private ticketService: TicketService,
    private booking: BookingService,
  ) { }


  ngOnInit(): void {
    this.product = this.booking.getBookings();
  }

 

}
