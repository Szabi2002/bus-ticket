
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IStation } from '../models/Station';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  collectionName = "Stations";

  constructor(private angularFireStore: AngularFirestore) { }

  getStations(): Observable<IStation[]> {
    return this.angularFireStore.collection<IStation>(this.collectionName).valueChanges();
  }
  
}


