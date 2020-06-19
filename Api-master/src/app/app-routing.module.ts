import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AgreementDetailComponent } from './components/agreement-detail/agreement-detail.component';
import { MessageComponent } from './components/message/message.component';


const routes: Routes = [
  {path:'Products' , component: ProductListComponent},
  {path: 'Products/:id/getAll',component:AgreementDetailComponent},
  {path: 'Products/:id;idd=:id;email=:email;price=:price;password=:password;',component :MessageComponent},
  {path: 'Products/:id/accept;agreement_id=:agreement_id;email=:email;password=:password',component:MessageComponent},
  { path : '' ,redirectTo:'/Products',pathMatch: 'full'},
  {path : '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
