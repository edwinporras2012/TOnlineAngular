import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllProductComponent } from '../products/view-all-product/view-all-product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


// RUTAS HIJAS DESPUES DEL PADRE
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ViewAllProductComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
