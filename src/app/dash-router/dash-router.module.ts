import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CreditcardComponent } from '../creditcard/creditcard.component';
import { PaypalComponent } from '../paypal/paypal.component';
import { MybankComponent } from '../mybank/mybank.component';
import { TransactionSummaryComponent } from '../transaction-summary/transaction-summary.component';
import {ReceiptComponent} from '../reciept/receipt.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'paymentPage/1', component: CreditcardComponent },
  { path: 'paymentPage/2', component: PaypalComponent },
  { path: 'paymentPage/3', component: MybankComponent },
  { path: 'summary', component: TransactionSummaryComponent },
  { path: 'receipt', component: ReceiptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashRouterModule { }