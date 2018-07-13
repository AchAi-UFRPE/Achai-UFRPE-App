import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroEntregadorProvider } from '../../providers/services/cadastroEntregadorService';
import { LoginPage } from '../login/login';



@IonicPage()
@Component({
  selector: 'page-perfil-do-entregador',
  templateUrl: 'perfil-do-entregador.html',
})
export class PerfilDoEntregadorPage {

  dadoEntregador = [];
  edtEntregador = {
    nome:null,
    email:null,
    senha:null
  }

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public cadastroEntregadorProvider: CadastroEntregadorProvider) {
      this.dadoEntregador.push(JSON.parse(localStorage.getItem('dadosLocalLogin')));
      console.log(this.dadoEntregador);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilDoEntregadorPage');
  }

  editarEntregador(){
    var idEntregador = this.dadoEntregador[0].dados.id;

    if (this.edtEntregador.nome == null){
      delete this.edtEntregador['nome'];
    }
    if (this.edtEntregador.email == null){
      delete this.edtEntregador['email'];
    }
    if (this.edtEntregador.senha == null){
      delete this.edtEntregador['senha'];
    }
    this.cadastroEntregadorProvider.putEditarEntregador('/entregadores/'+idEntregador, this.edtEntregador).then(novousuario => {
      console.log(novousuario)
    }, (err) => {
        console.log(err);
    });
    this.navCtrl.push(LoginPage);
  }
}
