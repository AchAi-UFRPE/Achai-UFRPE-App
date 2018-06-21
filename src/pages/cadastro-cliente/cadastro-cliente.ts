import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CadastroClienteProvider } from '../../providers/services/cadastroClienteService';


@IonicPage()
@Component({
  selector: 'page-cadastro-cliente',
  templateUrl: 'cadastro-cliente.html',
})
export class CadastroClientePage {

  public dadosCadastro = {
    nome: null,
    email: null,
    senha: null,
    cpf: null
  }

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public cadastroClienteProvider: CadastroClienteProvider,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroClientePage');
  }
  
  irLogin():void{

    this.cadastroClienteProvider.postCadastroCliente('/clients', this.dadosCadastro)
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
