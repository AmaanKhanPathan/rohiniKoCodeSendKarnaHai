import { Injectable } from '@angular/core';
import { Iproducts } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsArray: Array<Iproducts> = [
    {
      pname: 'SamsungA54',
      pid: 1,
      pStatus: 'In-Progress',
      canReturn : 1
    },
    {
      pname: 'Nokia X30',
      pid: 2,
      pStatus: 'Dispatched',
      canReturn : 1
    },
    {
      pname: 'Iphone15',
      pid: 3,
      pStatus: 'Delivered',
      canReturn : 0
    },
  ]

  constructor() { }

  getAllProducts():Array<Iproducts>{
    return this.productsArray
  }

  getSingleProd(id : number){
    return this.productsArray.find(prod => prod.pid === id)
  }

  updateProduct(pObj : Iproducts){
    this.productsArray.forEach(prod => {
      if(prod.pid === pObj.pid){
        prod.pname = pObj.pname;
        prod.pStatus = pObj.pStatus
      }
    })
  }
}
