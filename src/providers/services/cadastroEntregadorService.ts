import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CadastroEntregadorProvider {

  //UrlServer:any = 'http://localhost:3000';

  UrlServer:any = 'http://achai.herokuapp.com'

  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
  }

  postCadastroEntregador(UrlApi, data) {
    UrlApi= this.UrlServer+UrlApi;
    return new Promise((resolve, reject) => {

      this.http.post(UrlApi, data).subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}