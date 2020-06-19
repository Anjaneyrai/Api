import { Injectable } from '@angular/core';
import {HttpClient}   from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { Agreementdetail } from '../common/agreementdetail';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl="http://localhost:7070/postgressApp/productList";
  private baseU="http://localhost:7070/postgressApp/productList/2/getAll";
  constructor(private httpclient :HttpClient) { }
  getProducts(theProductId:number):Observable<Product[]>{
      const searchUrl=`${this.baseUrl}/${theProductId}`;
     if(theProductId==-1)                            
    return this.httpclient.get<Product[]>(this.baseUrl);
    else
    return this.httpclient.get<Product[]>(this.baseUrl);
  }
  getDetail(Id:number):Observable<Agreementdetail[]>{
    const url=`${this.baseUrl}/${Id}/getAll`;
    return this.httpclient.get<Agreementdetail[]>(url);
  }
  getMessage(Id:number,email:string,price:number,password:string):Observable<Message[]>
  {
    const url=`${this.baseUrl}/initiate?id=${Id}&email=${email}&price=${price}&password=${password}`;
    return this.httpclient.get<Message[]>(url);
  }
}
