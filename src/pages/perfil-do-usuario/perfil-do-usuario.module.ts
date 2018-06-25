import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilDoUsuarioPage } from './perfil-do-usuario';

@NgModule({
  declarations: [
    PerfilDoUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilDoUsuarioPage),
  ],
})
export class PerfilDoUsuarioPageModule {}
