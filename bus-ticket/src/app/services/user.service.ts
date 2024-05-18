import { Injectable } from '@angular/core';
import { User } from '../models/User';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { user } from '@angular/fire/auth';
import { ref } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionName = "Users";

  constructor(private angularFireStore: AngularFirestore) { }

  creat(user: User){
   return this.angularFireStore.collection<User>(this.collectionName).doc(user.uid).set(user);
  }

  getInfoByUId(uid: string){
    return this.angularFireStore.collection<User>(this.collectionName, ref => 
      ref.where('uid', '==', uid).orderBy('name')
    ).valueChanges();
  }

  readByID(uid: string){
    return this.angularFireStore.collection<User>(this.collectionName).doc(uid).valueChanges();
  }

  update(user: User){
    return this.angularFireStore.collection<User>(this.collectionName).doc(user.uid).set(user);
  }

  removeUser(uid: string){
    this.angularFireStore.doc<User>('Users/' + uid).delete();
    alert('Felhasználó eltávlótva!');
}

}
