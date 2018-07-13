import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaDeComprasProdutosPage } from './lista-de-compras-produtos';

@NgModule({
  declarations: [
    ListaDeComprasProdutosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaDeComprasProdutosPage),
  ],
})
export class ListaDeComprasProdutosPageModule {}
