import { Component, OnInit } from '@angular/core';
import { Iproducts } from 'src/app/model/products';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsInfo ! : Array<Iproducts>
  selectedProductId! : number

  constructor(private _productsService : ProductsService) { }

  ngOnInit(): void {
    this.productsInfo = this._productsService.getAllProducts()
    this.selectedProductId = this.productsInfo[0].pid
  }

}
