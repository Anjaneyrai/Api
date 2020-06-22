import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public pro : Product=new Product();
  productId:number;
  constructor(private _productservice:ProductService,private _activatedroute:ActivatedRoute
    ) { }

  ngOnInit() {
    this._activatedroute.paramMap.subscribe(()=>{
    this.productId=+this._activatedroute.snapshot.paramMap.get('id');
    this._productservice.getProduct(this.productId).subscribe(
      data=>{this.pro=data;}
    )
    })
    console.log(this.pro.name);
  }

}
