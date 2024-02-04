import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproducts } from 'src/app/model/products';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productId!: number;
  productObject!: Iproducts

  constructor(private _route: ActivatedRoute,
    private _productsService: ProductsService,
    private _router: Router) { 
      this._route.data.subscribe(res=>{
        this.productObject = res['product'];
        console.log(this.productObject);
        
      })
    }



  ngOnInit(): void {
    // console.log(this._route.snapshot);
    // this.productId = +this._route.snapshot.params['id'];
    // console.log(this.productId);
    // console.log(typeof this.productId);
    this._route.params
      .subscribe((params: Params) => {
        this.productId = +params['id']
        this.productObject = this._productsService.getSingleProd(this.productId)!

      })
    console.log(this.productObject);

  }

  goToEditProduct() {
    this._router.navigate(['/products', this.productObject.pid, 'edit'], {
      queryParamsHandling: 'preserve'
    })

  }

}
