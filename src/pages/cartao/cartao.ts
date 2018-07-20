import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DataEntregaPage } from '../data-entrega/data-entrega';
import { CarrinhoPage } from '../carrinho/carrinho';
import {CadastroClienteProvider} from '../../providers/services/cadastroClienteService';

/**
 * Generated class for the CartaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cartao',
  templateUrl: 'cartao.html',
})
export class CartaoPage {

  public dadosCartao = {
    numero: null,
    validade: null,
    codigo: null,
    nome: null,
    cpf: null
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public CadastroClienteProvider: CadastroClienteProvider,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartaoPage');
  }


//validaçoes
/**
 * confirmacaoNumero
 */
public confirmacaoNumero(numero:String):Boolean{
  if (numero != null){
    if (numero.toString().length >= 14){
      return true;
    }else{
      this.invalido("nome");
      }
  }else{
    this.invalido("nome");
    }
}


/**
 * confirmacaoValidade
 */
public confirmacaoValidade(validade){
  var retorno = false;
  if (validade != null){
   var validate: string[2]=validade.toString().split('/');
    if ((validate[0]>='01' && validate[0] <= '12') && validate[1] >= '18'){
      retorno = true;
    }else{
      this.invalido("validade");
      retorno = false;
      }
  }else{
    this.invalido("validade");
    retorno = false;
    }
    return retorno;
}


/**
 * confirmacaoCodigo
 */
public confirmacaoCodigo(codigo:String){
  var retorno = false;
  if (codigo != null){
  if (codigo.toString().length == 3){
    retorno = true;
  }else{
    this.invalido("codigo");
    retorno = false;
    }
}else{
  this.invalido("codigo");
  retorno = false;
  }
  return retorno;
}


/**
 * confirmacaoNome
 */
public confirmacaoNome(nome:String) {
  var retorno = false;
  if (nome != null){
    if (nome.toString().length >= 3){
      retorno = true;
    }else{
      this.invalido("nome");
      retorno = false;
      }
  }else{
    this.invalido("nome");
    retorno = false;
    }
    return retorno;
}

/**
 * confirmacaoCPF
 * Esta não é uma validação padrão de cpf!
 * 1- Os numeros do cpf devem ser somados sem os dv
 * 2- Essa soma mod 9 (?) deve ser igual ao primeiro digito do dv
 * 3- Soma-se os 9 digitos mais o primeiro digito do dv
 * 4- Essa soma mod 9 (?) deve ser igual ao segundo digito do dv
 * obs. (?) valor do mod n confirmado
 */
public confirmacaoCPF(cpf:String) {
  var retorno = false;
  if (cpf != null){
    if (cpf.toString().length == 11){
      retorno = true;
    }else{
      this.invalido("CPF");
      retorno = false;
      }
  }else{
    this.invalido("CPF");
    retorno = false;
  }
  return retorno;
}

public invalido(what){
  const alert = this.alertCtrl.create({
    subTitle: what + ' inválido!',
    buttons: ['OK']
  });
  alert.present();
}


/**
 * irConfirmarCartao
 * Confirma Cartão de Credito e envia os dados para o servidor
 */
public irConfirmarCartao() {

  console.log("apertado o botão")
  let nome_cartao = this.dadosCartao.nome;
  let numero_cartao = this.dadosCartao.numero;
  let cvv_cartao = this.dadosCartao.codigo;
  let validade_cartao = this.dadosCartao.validade;
  let cpf_cartao = this.dadosCartao.cpf

  if(this.confirmacaoNome(nome_cartao) && 
  this.confirmacaoNumero(numero_cartao) &&
  this.confirmacaoCodigo(cvv_cartao) &&
  this.confirmacaoValidade(validade_cartao) &&
  this.confirmacaoCPF(cpf_cartao)){
    this.CadastroClienteProvider.postCadastroCliente('/cartoes', this.dadosCartao)
    .then(dadosCartao => {
      
      console.log(dadosCartao); // data received by server 
      if (dadosCartao['_body'] != "[]"){        
        this.navCtrl.push(CarrinhoPage); //mandar pra tela de sucesso
      }else{        
        this.showAlertFailedCadastro();
      }
    }, (err) => {
        console.log("Erro", err);
    });
  }
}


private showAlertFailedCadastro(){
  const alert = this.alertCtrl.create({
    subTitle: 'Cadastro de cartão não pode ser efetivado',
    buttons: ['OK']
  });
  alert.present();
}


  public voltar():void{
    this.navCtrl.pop();
  }
  public irDataEntrega():void{
    this.navCtrl.push(DataEntregaPage);
  }
}

