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

  private REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public cadastroClienteProvider: CadastroClienteProvider,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroClientePage');
  }

  private confirmacaoNome(nome_usuario):any{
    if (nome_usuario != null){
      if (nome_usuario.toString().length > 3){
        return true;
      }else{
        this.nomeInvalido();
        }
    }else{
      this.nomeInvalido();
      }
  }


  private confirmacaoSenha(senha_usuraio):any{
    if (senha_usuraio != null){
      if (senha_usuraio.toString().length > 5){
        return true;
      }else{
        this.senhaInvalida();
        }
    }else{
      this.senhaInvalida();
    }
  }
  
  private confirmacaoEmail(email_usuario):any{
    if (this.REGEX.test(email_usuario)){
      return true;
    }else{
      this.emailInvalido();
    }
  }

  private confirmacaoCpf(cpf_usuario):any{
    if (cpf_usuario != null){
      if (cpf_usuario.toString().length > 11){
        return true;
      }else{
        this.cpfInvalido();
        }
    }else{
      this.cpfInvalido();
    }
  }
  
  private irLogin():void{

    let nome_usuario = this.dadosCadastro.nome;
    let email_usuario = this.dadosCadastro.email;
    let senha_usuraio = this.dadosCadastro.senha;
    let cpf_usuario = this.dadosCadastro.cpf;

    if (this.confirmacaoNome(nome_usuario)){
      if(this.confirmacaoEmail(email_usuario)){
        if(this.confirmacaoSenha(senha_usuraio)){
          if(this.confirmacaoCpf(cpf_usuario)){
            this.cadastroClienteProvider.postCadastroCliente('/clientes', this.dadosCadastro)
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
        }
      }
    }
    
  }

  showAlertFailedCadastro(){
    const alert = this.alertCtrl.create({
      subTitle: 'Cadastro não pode ser efetivado',
      buttons: ['OK']
    });
    alert.present();
  }

  nomeInvalido() {
    const alert = this.alertCtrl.create({
      subTitle: 'Nome muito curto',
      buttons: ['OK']
    });
    alert.present();
  }
  emailInvalido() {
    const alert = this.alertCtrl.create({
      subTitle: 'Email inválido',
      buttons: ['OK']
    });
    alert.present();
  }
  senhaInvalida() {
    const alert = this.alertCtrl.create({
      subTitle: 'Senha com menos de 5 caracteres',
      buttons: ['OK']
    });
    alert.present();
  }
  cpfInvalido() {
    const alert = this.alertCtrl.create({
      subTitle: 'CPF inválido',
      buttons: ['OK']
    });
    alert.present();
  }
}
