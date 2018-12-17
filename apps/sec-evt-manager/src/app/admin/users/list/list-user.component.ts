import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../model/user";

@Component({
  selector: 'sec-apps-list-users',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  public users: User[];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.users.subscribe(resp => this.users = resp)
  }
}
