import { Component, OnInit,Input } from '@angular/core';
import { CardDetails } from '../Models/cardDetails';
import { Location } from '@angular/common';

@Component({
  selector: 'receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css','../animate.css']
})
export class ReceiptComponent implements OnInit {
  constructor(private location: Location,private summaryCard:CardDetails) { }

  ngOnInit() {    
  }
  goBack(): void {
    this.location.back();
  }
}