import { Component, OnInit } from '@angular/core';
import { Agreementdetail } from 'src/app/common/agreementdetail';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AcceptComponent } from '../accept/accept.component';

@Component({
  selector: 'app-agreement-detail',
  templateUrl: './agreement-detail.component.html',
  styleUrls: ['./agreement-detail.component.css']
})
export class AgreementDetailComponent implements OnInit {
   public agreement =[];
   productId:number;
  constructor(private _agreementService:ProductService,private _activatedroute
    :ActivatedRoute,private dialog:MatDialog) { }

  ngOnInit(){
    this._activatedroute.paramMap.subscribe(()=>{
  const hasId:boolean=this._activatedroute.snapshot.paramMap.has('id');
  if(hasId)
  {
    this.productId=+this._activatedroute.snapshot.paramMap.get('id');
  }
  else
  this.productId=-1;
  this._agreementService.getDetail(this.productId).subscribe(
    data => {this.agreement=data;}
  )
    })
    
  }
  onInitiate(){
    const dialogconfig=new MatDialogConfig();
    dialogconfig.disableClose=false;
    dialogconfig.autoFocus=true;
    dialogconfig.width="50%";

this.dialog.open(AcceptComponent,dialogconfig);
  }

}
