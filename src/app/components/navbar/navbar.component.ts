import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _authService : AuthService, private _router : Router) { }

  ngOnInit(): void {
  }

  logIn(){
    // this._authService.logInToApp()
  }

  logOut(){
    this._router.navigate(['/'])
    this._authService.logOutFromApp();
    localStorage.removeItem("token");
    localStorage.removeItem("userRole")
  }

}
