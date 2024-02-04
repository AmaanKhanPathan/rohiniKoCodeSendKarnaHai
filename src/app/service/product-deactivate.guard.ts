import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IcanDeactivatedComp } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductDeactivateGuard implements CanDeactivate<IcanDeactivatedComp> {
  canDeactivate(
    component: IcanDeactivatedComp, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, 
    nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return component.canDeactive()
  }
 
  
}
