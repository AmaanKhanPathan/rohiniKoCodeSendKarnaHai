import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iusers } from 'src/app/model/users';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId! : number;
  userObject! : Iusers

  constructor(private _route : ActivatedRoute,
    private _userService : UsersService,
    private _router : Router) { }

  ngOnInit(): void {
    this.userId = +this._route.snapshot.params['id']
    console.log(this.userId);
    this.userObject = this._userService.getSingleUser(this.userId);

    this._route.params
          .subscribe((myParams : Params)=>{
            console.log(myParams);
            this.userId = +myParams['id'];
            console.log(this.userId);           
            this.userObject = this._userService.getSingleUser(this.userId)            
          })    
  }

  goToEditUser(){
    this._router.navigate(['/users',this.userId, 'edit'], {
      queryParamsHandling : "preserve"
    })
  }

}
