import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { NavigationEnd, Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/Ticket';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../models/Booking';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  constructor(private router: Router, private ticket: TicketService, private booking: BookingService,) { }
  tickets$!: Observable<Ticket[]>;
  

  ngOnInit(): void {
    this.tickets$ = this.ticket.getTickets();
  }

  vasarlas(tickets$: Ticket){
    this.booking.addBookins(tickets$);
  }

}
