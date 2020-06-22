import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AgreementDetailComponent } from './components/agreement-detail/agreement-detail.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MessageComponent } from './components/message/message.component';
import { AcceptComponent } from './components/accept/accept.component';
import { ProductComponent } from './components/product/product.component';
import { AcceptcompComponent } from './components/acceptcomp/acceptcomp.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    PageNotFoundComponent,
    AgreementDetailComponent,
    LoginComponent,
    MessageComponent,
    AcceptComponent,
    ProductComponent,
    AcceptcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  entryComponents:[LoginComponent]
})
export class AppModule {

 }
