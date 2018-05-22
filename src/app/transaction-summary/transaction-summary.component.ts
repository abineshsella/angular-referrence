import { Component, OnInit,Input } from '@angular/core';
import { CardDetails } from '../Models/cardDetails';
import { Location } from '@angular/common';
import { PagamService } from '../Services/pagam.service';

// import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.css','../animate.css']
})
export class TransactionSummaryComponent implements OnInit {
// @Input() summaryCard:CardDetails;
// @BlockUI() blockUI: NgBlockUI;
  constructor(private location: Location,private summaryCard:CardDetails,private pgmService: PagamService) { }

  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }
  doTransaction(): void {
    //this.pgmService.doTransaction("https://172.17.4.63/GestPayREST/callpagams2s",this.summaryCard);
    this.pgmService.doPOST();
    // this.blockUI.start(); // Start blocking
 
    // setTimeout(() => {
    //   this.blockUI.stop(); // Stop blocking
    // }, 5000);
  }
}