import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router, ɵROUTER_PROVIDERS } from '@angular/router';
import firebase from 'firebase/app'; 
import { AuthService } from 'src/app/services/auth.service';
import 'firebase/auth';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ɵROUTER_PROVIDERS]
})
export class LoginComponent implements OnInit {

  constructor(private AuthService: AuthService, public afAuth: AngularFireAuth, private router: Router) { 
    this.loading = true;
  }
  public isLogged: boolean = false;
  provider:any;
  user:any;
  public loading: boolean;

  ngOnInit(): void {
    var provider = new firebase.auth.GoogleAuthProvider();
    this.provider = provider;
    firebase.auth().onAuthStateChanged(user=> {
      this.user = user;
    });
    this.getCurrentUser();
  }

  async getCurrentUser(){
    this.loading= false;
    this.AuthService.isAuth().subscribe(auth=>{
      console.log('ESTADO= ', auth)
      if (auth) {
        console.log('Usuario logeado', auth?.email);
        this.isLogged = true;
        // this.router.navigate(['']);
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