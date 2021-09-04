import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewRandomQuoteComponent } from './view-random-quote/view-random-quote.component';

const routes: Routes = [
  { path: 'auth/view-quote', component: ViewRandomQuoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
