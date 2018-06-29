import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaDeComprasPage } from './lista-de-compras';

@NgModule({
  declarations: [
    ListaDeComprasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaDeComprasPage),
  ],
})
export class ListaDeComprasPageModule {}
