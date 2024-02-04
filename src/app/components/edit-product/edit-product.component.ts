import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { IcanDeactivatedComp, Iproducts, Ipstatus } from 'src/app/model/products';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productId! : number;
  selectedProduct! : Iproducts;
  canEdit : number = 0;

  constructor(private _route : ActivatedRoute,
    private _productsService : ProductsService,
    private _router : Router) { }

  

  ngOnInit(): void {
    this.productId = +this._route.snapshot.params['id'];
    this.selectedProduct = this._productsService.getSingleProd(this.productId)!

    this._route.queryParams
          .subscribe((queryParams : Params)=>{
            console.log(queryParams);
            this.canEdit = +queryParams['canEdit']
            
          })
  }

  onProductUpdate(pname : HTMLInputElement, pStatus : HTMLSelectElement){
    let obj : Iproducts = {
      pname : pname.value,
      pStatus : pStatus.value as Ipstatus,
      pid : this.productId,
      canReturn : this.selectedProduct.canReturn
    }
  this._productsService.updateProduct(obj);
  this._router.navigate(['/products', this.productId])

  }

  // canDeactive : () => boolean | Promise<boolean> | Observable<boolean> | any {
    // return false
  // }

 


}
