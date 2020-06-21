import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from '../login/login.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { logging } from 'protractor';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];
  pro:Product;
  currentProductId:number;
  constructor(private _productService:ProductService,
        private _activatedroute:ActivatedRoute  ,private dialog:MatDialog ) {  }

  ngOnInit() {
    this._activatedroute.paramMap.subscribe(()=>{
      this.listProducts();
    })
  }
  listProducts(){
    
   const hasId:boolean= this._activatedroute.snapshot.paramMap.has('id');
  if(hasId==true)
  {
    this.currentProductId=+this._activatedroute.snapshot.paramMap.get('id');
  }else
  {
    this.currentProductId=-1;
  } 
    this._productService.getProducts(this.currentProductId).subscribe(
      data => {this.products=data;}
    )
  }
  onInitiate(){
    const dialogconfig=new MatDialogConfig();
    dialogconfig.disableClose=false;
    dialogconfig.autoFocus=true;
    dialogconfig.width="50%";

this.dialog.open(LoginComponent,dialogconfig);
  }
}
