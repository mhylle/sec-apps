import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../model/user";

@Component({
  selector: 'sec-apps-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  newUser: User = new User();

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  create() {
    this.userService.addUser(this.newUser).subscribe(() => {
      this.newUser = new User();
    })
  }
}
