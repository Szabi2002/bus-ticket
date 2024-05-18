import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { NavigationEnd, Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/Ticket';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  constructor(private router: Router, private ticket: TicketService) { }
  tickets$!: Observable<Ticket[]>;

  ngOnInit(): void {
    this.tickets$ = this.ticket.getTickets();
  }

}
