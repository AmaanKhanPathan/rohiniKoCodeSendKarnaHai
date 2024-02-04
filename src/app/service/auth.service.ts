import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedInStatus : boolean = false;

  constructor(private _router : Router) { }

  logInToApp(username : string, password : string){
    if (username === 'john' && password === 'zaq'){
    this.isLoggedInStatus = true;
    localStorage.setItem("token", "jwt token");
    localStorage.setItem("userRole", "user");
    this._router.navigate(['/home'])
    }else if(username === 'jen' && password === 'qaz'){
    this.isLoggedInStatus = true;
    localStorage.setItem("token", "jwt token");
    localStorage.setItem("userRole", "admin");
    this._router.navigate(['/home'])
    }else{
      alert('Invalid username and password');
      this._router.navigate(['/'])
    }
    
  }

  logOutFromApp(){
    this.isLoggedInStatus = false;
  }

  getStatusOfLoggedIn(){
    return this.isLoggedInStatus
  }
  isAuthenticated():Promise<boolean>{
    return new Promise ((resolve, reject)=>{
      setTimeout(() => {
        if(localStorage.getItem("token")){
          this.isLoggedInStatus = true
        }else{
          this.isLoggedInStatus = false;
        }
        resolve(this.isLoggedInStatus)
      }, 1000);
    })
  }
}
