import { Injectable } from '@angular/core';
import { Booking } from '../models/Booking';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { user } from '@angular/fire/auth';
import { ref } from '@angular/fire/storage';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  collectionName = "Bookings"

  
 constructor(private angularFireStore: AngularFirestore) { }

 addBookins(product: any) {
  this.angularFireStore.collection('Bookings').add(product)
  .then( () => {
    console.log('Sikeres Vásárlás!', product);
    alert('Sikeres vásárlás!')
  })
  .catch((error: any) => {
    console.error('Hiba történt a kosárhoz adás közben: ', error);
  });
}

getBookings(): Observable<Booking[]> { 
  return this.angularFireStore.collection(this.collectionName).snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Booking; 
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    })
  );
}
}
