import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaInicialClientePage } from './tela-inicial-cliente';

@NgModule({
  declarations: [
    TelaInicialClientePage,
  ],
  imports: [
    IonicPageModule.forChild(TelaInicialClientePage),
  ],
})
export class TelaInicialClientePageModule {}
