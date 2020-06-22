import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-acceptcomp',
  templateUrl: './acceptcomp.component.html',
  styleUrls: ['./acceptcomp.component.css']
})
export class AcceptcompComponent implements OnInit {
  messages:Message[];
  productId:number;
  agreementId:number;
  email:string;
  password:string;
  constructor(private acceptservice:ProductService
    ,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(()=>{
    this.productId=+this.activatedroute.snapshot.paramMap.get('id');
    this.agreementId=+this.activatedroute.snapshot.paramMap.get('agreementId');
    })
    this.activatedroute.paramMap.subscribe(()=>{
      this.activatedroute.queryParams.subscribe(params=>{
      this.email=params['email'];
      this.password=params['password'];
      
      })
      this.acceptservice.getAccept(this.productId,this.email,this.password,100+this.agreementId).subscribe(
          data => {this.messages=data;}
        )
        console.log(this.agreementId);
        }
      )
  }

}
