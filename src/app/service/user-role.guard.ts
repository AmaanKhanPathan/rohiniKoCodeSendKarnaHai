import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {
  getUserRole ! : string;
  constructor(private _route : ActivatedRoute){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let getUserRole = route.data['userRole'];
      let getLoggedInUserRole : string = localStorage.getItem("userRole")!
      if(getUserRole.includes(getLoggedInUserRole)){
        return true
      }else{
        return false
      }
  }
  
}
