import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isHavingAccount: boolean = true

  constructor(private _authService: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  onLogin(username: HTMLInputElement, password: HTMLInputElement) {
      this._authService.logInToApp(username.value, password.value);
    }

  }

