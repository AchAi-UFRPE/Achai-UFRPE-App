import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CadastroEntregadorProvider } from '../../providers/services/cadastroEntregadorService';

@IonicPage()
@Component({
  selector: 'page-cadastro-entregador',
  templateUrl: 'cadastro-entregador.html',
})
export class CadastroEntregadorPage {

  public dadosCadastroEntregador = {
    nome: null,
    email: null,
    senha: null,
    cpf: null,
    cnh: null
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public CadastroEntregadorProvider: CadastroEntregadorProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroEntregadorPage');
  }
  irLogin():void{
   
    this.CadastroEntregadorProvider.postCadastroEntregador('/workers', this.dadosCadastroEntregador)
    .then(dadosCadastro => {  
      
      //console.log(dadosLogin); // data received by server 
      if (dadosCadastro['_body'] != "[]"){        
        this.navCtrl.push(LoginPage);
      }else{        
        this.showAlertFailedCadastro();
      }
    }, (err) => {
        console.log("Erro", err);
    });

  }

  showAlertFailedCadastro() {
    const alert = this.alertCtrl.create({
      title: 'Usuário',
      subTitle: 'Cadastro não pode ser efetuado',
      buttons: ['OK']
    });
    alert.present();
  }

}
