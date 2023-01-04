import { Component, OnChanges, OnInit, AfterViewInit } from '@angular/core';
// import { ProductService } from "../../products/product.service";
import { AuthService } from "../../services/auth.service";
import { AngularFireAuth } from "@angular/fire/auth";
import {LoginComponent}  from "../../user/login/login.component";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(private AuthService: AuthService, private afsAuth: AngularFireAuth) { }

  public isLogged: boolean = false;
  public email: any = '';

  ngAfterViewInit(){
    // this.AuthService.isAuth().subscribe(auth=>{
    //   console.log('Nuevo estado: ', auth);
    //   this.email = auth?.email;      
    //   if (auth) {
    //     this.isLogged = true;
    //   }else{
    //     this.isLogged = false;
    //   }
    // })
  }

  ngOnInit(): void {
    this.AuthService.isAuth().subscribe(auth=>{
      console.log('Nuevo estado: ', auth);
      this.email = auth?.email;      
      if (auth) {
        this.isLogged = true;
      }else{
        this.isLogged = false;
      }
    })
  }

  // getCurrentUser(){
  //   this.AuthService.isAuth().subscribe(auth=>{
  //     if (auth) {
  //       console.log('Usuario logeado');
  //       this.isLogged = true;
  //     }else{
  //       console.log('Usuario NO logeado');
  //       this.isLogged = false;
  //     }
  //   })
  // }

  onLogout(){
    this.afsAuth.signOut();
  }

}
