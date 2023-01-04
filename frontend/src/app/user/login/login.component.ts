import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import firebase from 'firebase/app'; 
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthService: AuthService, public afAuth: AngularFireAuth, private router: Router) { }
  public isLogged: boolean = false;
  provider:any;
  user:any;

  ngOnInit(): void {
    this.getCurrentUser();
    var provider = new firebase.auth.GoogleAuthProvider();
    this.provider = provider;
    firebase.auth().onAuthStateChanged(user=> {
      this.user = user;
    });
  }

  async getCurrentUser(){
    this.AuthService.isAuth().subscribe(auth=>{
      console.log('ESTADO= ', auth)
      if (auth) {
        console.log('Usuario logeado', auth?.email);
        this.isLogged = true;
      }else{
        console.log('Usuario NO logeado', auth);
        this.isLogged = false;
      }
    })
  }

  // onLoginGoogle(){
  //   // this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

  //   var provider = new firebase.auth.GoogleAuthProvider();
  //   this.provider = provider;

  //   this.afAuth.signInWithPopup(this.provider).then(function(result:any) {
  //     var user:any = result.user;
  //     console.log('VER G',user.email);
      
  //    }).catch(function(error) {
      
  //      var errorCode = error.code;
  //      var errorMessage = error.message;
  //      var email = error.email;
  //      var credential = error.credential;
  //    });
  //   // this.router.navigate([environment.ALL_CATEGORIES]);
  // }

  // onLoginGoogle(): void {
  //   this.AuthService.loginGoogleUser()
  //     .then((res) => {
  //       console.log('Conectando Google');
  //       this.onLoginRedirect();
  //     }).catch(err => console.log('err', err.message));
  // }
  async onLoginGoogle() {
    try {
      this.AuthService.loginGoogle()
    } catch (error) {
      console.log(error)
    }
  }

  onLoginFacebook(){
    var provider = new firebase.auth.FacebookAuthProvider();
    this.provider = provider;

    this.afAuth.signInWithPopup(this.provider).then(function(result:any) {
      var user:any = result.user;
      console.log('VER F',user);
      
     }).catch(function(error) {
      
       var errorCode = error.code;
       var errorMessage = error.message;
       var email = error.email;
       var credential = error.credential;
     });
    // this.afAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  onLoginRedirect(): void {
    this.router.navigate(['products']);
  }

  onLogout(){
    this.afAuth.signOut();
  }

}