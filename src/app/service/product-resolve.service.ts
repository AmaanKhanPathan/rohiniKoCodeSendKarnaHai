import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Iproducts } from '../model/products';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<any> {

  constructor(private _productService : ProductsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let getId = +route.params['id'];
    return this._productService.getSingleProd(getId)
  }
}
