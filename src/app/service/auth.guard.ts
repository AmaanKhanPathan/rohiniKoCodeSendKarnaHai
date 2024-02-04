import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private _authService : AuthService,
    private _router : Router){}
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._authService.isAuthenticated()
            .then((isAuth : boolean)=>{
              if(isAuth == true){
                return true
              }else{
                this._router.navigate(['/'])
                return false
              }
            })
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state)
    // return this._authService.isAuthenticated()
    //     .then((loginStatus : boolean)=>{
    //       if(loginStatus){
    //         return true
    //       }else{
    //         this._router.navigate(['/'])
    //         return false
    //       }
    //     })
  }
  
}
