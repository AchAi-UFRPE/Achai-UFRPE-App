import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the CadastroCartaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CadastroCartaoProvider {

  //UrlServer:any = 'http://localhost:3000';

  UrlServer:any = 'http://achai.herokuapp.com'

  constructor(public http: HttpClient) {
    console.log('Hello CadastroCartaoProvider Provider');
  }

  postCartao(UrlApi, data) {
    UrlApi= this.UrlServer+UrlApi;
    return new Promise((resolve, reject) => {

      this.http.post(UrlApi, data).subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  putCartao(UrlApi, data){
    UrlApi= this.UrlServer+UrlApi;
    return new Promise((resolve, reject) => {

      this.http.put(UrlApi, data).subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
