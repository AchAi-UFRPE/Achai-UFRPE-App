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

   //codigo para fazer a máscara de cpf, cnpj
   cpf_cnpj = '';
   DECIMAL_SEPARATOR=".";
   GROUP_SEPARATOR=",";
   pureResult: any;
   maskedId: any;
   val: any;
   v: any;
 
   format(valString) {
     if (!valString) {
         return '';
     }
     let val = valString.toString();
     const parts = this.unFormat(val).split(this.DECIMAL_SEPARATOR);
     this.pureResult = parts;
     if(parts[0].length <= 11){
       this.maskedId = this.cpf_mask(parts[0]);
       return this.maskedId;
     }else{
       //deve retornar um erro sobre a quantidade de digitos inseridos
     }
 };
 
 unFormat(val) {
     if (!val) {
         return '';
     }
     val = val.replace(/\D/g, '');
 
     if (this.GROUP_SEPARATOR === ',') {
         return val.replace(/,/g, '');
     } else {
         return val.replace(/\./g, '');
     }
 };
 
  cpf_mask(v) {
     v = v.replace(/\D/g, ''); //Remove all that is not digits
     v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Insert a dot between the third and quarter digit
     v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Insert a dot between the third and quarter digit again
     v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); //Insert an dash between the third and quarter digit
     return v;
 }
 //fim do código para colocar máscara em cpf e cnpj

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
      if (cpf_usuario.toString().length == 14){
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

  public voltar():void{
    this.navCtrl.pop();
  }

  public nomeInvalido() {
    const alert = this.alertCtrl.create({
      subTitle: 'Nome muito curto',
      buttons: ['OK']
    });
    alert.present();
  }

  public emailInvalido() {
    const alert = this.alertCtrl.create({
      subTitle: 'Email inválido',
      buttons: ['OK']
    });
    alert.present();
  }

  public senhaInvalida() {
    const alert = this.alertCtrl.create({
      subTitle: 'Senha com menos de 5 caracteres',
      buttons: ['OK']
    });
    alert.present();
  }

  public cpfInvalido() {
    const alert = this.alertCtrl.create({
      subTitle: 'CPF inválido',
      buttons: ['OK']
    });
    alert.present();
  }
}
