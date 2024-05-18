import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Ticket } from '../models/Ticket';
import { user } from '@angular/fire/auth';
import { ref } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  collectionName = "Ticket";

  constructor(private angularFireStore: AngularFirestore) { }

  getTickets(): Observable<Ticket[]> {
    return this.angularFireStore.collection<Ticket>(this.collectionName).valueChanges();
  }

  
}
