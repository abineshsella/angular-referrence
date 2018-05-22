import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { PaymentMethod } from '../Models/paymentList';
import { paymentList } from '../mockPaymentList';

@Injectable()
export class PagamService {

  constructor(private http: Http,private _http:HttpClient) {
  }

  getPymntList(): Observable<PaymentMethod[]> {
    return of(paymentList);
  }

  doGET() {
    console.log("GET");
    let url = `https://172.17.4.63/GestPayREST/get`;
    this.http.get(url).subscribe(res => console.log(res.text()));
  }
  doPOST() {
    console.log("POST");
    //let header = new  HttpHeaders();
    //   header.append('Content-Type','application/json');
    //   header.append('Request-Method','POST');

    //   let options = new RequestOptions({ headers: header});

    //   let url = `http://172.17.4.63/GestPayREST/CallPagamS2S`;
    //   this.http.post(url, {"shopLogin": "bonzanotest", "uicCode": "242","amount": "1", "shopTransactionId": "Test_Visa","cardNumber": "4548812049400004", 
    // "expiryMonth":"05","expiryYear":"21","cvv":"123"},options).subscribe(res => console.log(res.json()));

    const newhttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    this._http.post('http://172.17.4.63/GestPayREST/CallPAGAMS2S',
      {
        "shopLogin": "bonzanotest",
        "uicCode": "242",
        "amount": "1",
        "shopTransactionId": "TEST",
        "cardNumber": "4548812049400004",
        "expiryMonth": "05",
        "expiryYear": "18",
        "cvv": "111"
      }, newhttpOptions)
      .subscribe
      (
      data => {
        alert(JSON.stringify(data));
      }
      );
  }
}