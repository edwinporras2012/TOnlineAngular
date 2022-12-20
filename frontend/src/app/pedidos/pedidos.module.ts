import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPedidosComponent } from './list-pedidos/list-pedidos.component';



@NgModule({
  declarations: [
    ListPedidosComponent
  ],
  exports:[
    ListPedidosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PedidosModule { }
