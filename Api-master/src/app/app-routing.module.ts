import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AgreementDetailComponent } from './components/agreement-detail/agreement-detail.component';
import { MessageComponent } from './components/message/message.component';
import { ProductComponent } from './components/product/product.component';
import { AcceptcompComponent } from './components/acceptcomp/acceptcomp.component';


const routes: Routes = [
  {path:'Products' , component: ProductListComponent},
  {path:'Products/:id' , component: ProductComponent},
  {path: 'Products/:id/getAll',component:AgreementDetailComponent},
  {path: 'Products/:id/initiate',component:MessageComponent},
  {path: 'Products/:id/initiate;email=:email;price=:price;password=:password;',component :MessageComponent},
  {path:'Products/:id/accept/:agreementId',component:AcceptcompComponent},
  {path: 'Products/:id/accept/:agreementId;email=:email;password=:password',component:AcceptcompComponent},
  { path : '' ,redirectTo:'/Products',pathMatch: 'full'},
  {path : '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
