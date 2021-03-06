import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home' , loadChildren: './modules/home/home.module#HomeModule'},
    // {path: 'credit', loadChildren: './credit/credit.module#CreditModule'},
    {path: 'current-account', loadChildren: './modules/current-account/currentAccount.module#currentAccountModule'},
    // {path: 'foreignCurrency', loadChildren: './foreign-currency/foreign-currency.module#ForeignCurrencyModule'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: NoPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
