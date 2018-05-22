import { Component, OnInit, OnChanges } from '@angular/core';
import { Location } from '@angular/common';

import { FormControl, Validators } from '@angular/forms';

import { CardDetails } from '../Models/cardDetails';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css','../animate.css']
})
export class CreditcardComponent implements OnInit { 

  validateClass : string ="";
  routing : string ="/paymentPage/1";
  constructor(private location: Location, private card: CardDetails) { }

  ngOnInit() {
  }

 justValidate(){
   if(
     (this.card.cardNumber == undefined || this.card.cardNumber == "") || 
     (this.card.cvv == undefined || this.card.cvv == "") || 
     (this.card.expiryDate == undefined || this.card.expiryDate == "") || 
     (this.card.email == undefined || this.card.email == "") || 
     (this.card.name == undefined || this.card.name == "") )
   {
      this.validateClass ="animated shake";
      this.routing = "/paymentPage/1";
   }
   else {this.routing = "/summary";}
   setTimeout(() => {
           this.validateClass = ""; 
    }, 1000);
 }

  goBack(): void {
    this.location.back();
  }
}