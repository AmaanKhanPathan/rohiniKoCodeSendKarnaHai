import { Component, OnInit } from '@angular/core';
import { Iusers } from 'src/app/model/users';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersInfo : Array<Iusers> = [];
  selectedUser ! : Iusers

  constructor(private _usersService : UsersService) { }

  ngOnInit(): void {
    this.usersInfo = this._usersService.getAllUsers()
    console.log(this.usersInfo);
    this.selectedUser = this.usersInfo[0]    
  }


}
