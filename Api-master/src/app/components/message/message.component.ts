import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
messages:Message[];
currentProductId:number;
email:string;
password:string;
price:number;
constructor(private _messageService:ProductService,
    private _activatedroute:ActivatedRoute) {
     }

  ngOnInit(): void {
    this._activatedroute.paramMap.subscribe(()=>{
      
      
    this._activatedroute.queryParams.subscribe(params=>{
    this.currentProductId=params['idd'];
    this.email=params['email'];
    this.price=params['price'];
    this.password=params['password'];
    
    })
    this._messageService.getMessage(this.currentProductId,this.email,
      this.price,this.password).subscribe(
        data => {this.messages=data;}
      )
      console.log(this.currentProductId);
      }
    )
}
}

