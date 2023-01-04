import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { audit, map } from 'rxjs/operators';
import firebase from 'firebase/app'; 
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afsAuth: AngularFireAuth, private afs: AngularFirestore) { }

  isAuth(){
    return this.afsAuth.authState.pipe(map(auth=> auth))
  }

  registerAuth(email:any, password:any){
    return this.afsAuth.createUserWithEmailAndPassword(email, password)
  }

  loginGoogleUser() {
    return this.afsAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(credential => this.updateUserData(credential.user))
  }

  async loginGoogle(){
    try {
      this.afsAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (error) {
      console.log(error);
    }
  }

  private updateUserData(user:any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data = {
      id: user.uid,
      email: user.email,
      roles: {
        editor: true
      }
    }
    return userRef.set(data, { merge: true })
  }
}
