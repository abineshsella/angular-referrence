import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { PaypalComponent } from './paypal/paypal.component';
import { MybankComponent } from './mybank/mybank.component';

import { DashRouterModule } from './dash-router/dash-router.module';
import { PagamService } from './Services/pagam.service';


import 'hammerjs';
import './card.js';

import { MatInputModule, MatButtonModule } from '@angular/material';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardModule } from 'ngx-card/ngx-card';
import { TransactionSummaryComponent } from './transaction-summary/transaction-summary.component';
import { ReceiptComponent } from './reciept/receipt.component'

import { HeaderComponent } from './header.component';
import { OrderComponent } from './order/order.component';
import { CardDetails } from './Models/cardDetails';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Ng2FabSpeedDialModule } from 'ng2-fab-speed-dial';
// import { BlockUIModule } from 'ng-block-ui';


// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
  imports: [
    BrowserModule, FormsModule, DashRouterModule, MatInputModule,
    MatButtonModule, ReactiveFormsModule, BrowserAnimationsModule,
    CardModule, HttpModule, HttpClientModule, Ng2FabSpeedDialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
   // BlockUIModule.forRoot()
  ],
  declarations: [
    AppComponent, DashboardComponent, CreditcardComponent, PaypalComponent, MybankComponent, 
    TransactionSummaryComponent, HeaderComponent, OrderComponent, ReceiptComponent ],
  bootstrap: [AppComponent],
  providers: [PagamService, CardDetails]
})
export class AppModule { }
