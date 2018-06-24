import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutosProvider {

  UrlServer:any = 'https://achai.herokuapp.com';

  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
  }

  //make a get products
  getProdutos(UrlApi) {
    UrlApi= this.UrlServer+UrlApi;
    return new Promise((resolve, reject) => {

      this.http.get(UrlApi).subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}