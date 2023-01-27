import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidosModule } from "./pedidos/pedidos.module";
import { SiteLayoutModule } from './site-layout/site-layout.module';
import { BUCKET } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage'; // REVISAR
import { environment } from 'src/environments/environment';
import { UserRoutingModule } from './user/user-routing.module';
import { AngularFireAuth } from "@angular/fire/auth";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterModule } from './user/register/register.module';
import { ValidationformDirective } from './validation/validationform.directive';
import { UsernameUniqueDirective } from './validation/username-unique.directive';

@NgModule({
  declarations: [
    AppComponent,
    ValidationformDirective,
    UsernameUniqueDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PedidosModule,
    HttpClientModule,
    SiteLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    UserRoutingModule,
    RegisterModule
    // ReactiveFormsModule,
    // FormsModule 
  ],
  providers: [
    // {provide: BUCKET, }
    AngularFireAuth,
    // RegisterModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
