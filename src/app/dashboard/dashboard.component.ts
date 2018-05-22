import { Component, OnInit } from '@angular/core';
import { PaymentMethod } from '../Models/paymentList'
import { PagamService } from '../Services/pagam.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../animate.css']
})
export class DashboardComponent implements OnInit {
  pymtList: PaymentMethod[] = [];

  constructor(private pgmService: PagamService) { }

  ngOnInit() {
    this.getPymtList();
  }
  getPymtList(): void {
    this.pgmService.getPymntList().subscribe(pymt => this.pymtList = pymt);
  }
}