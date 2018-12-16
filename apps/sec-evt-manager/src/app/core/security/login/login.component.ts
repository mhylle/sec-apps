import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'sec-apps-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  isLoggedIn: boolean;
  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.userService.userLoggedIn$.subscribe(value => {
      this.isLoggedIn = value != null;
    });
  }

  login() {
    this.userService.users.subscribe(value => {
      for (let i = 0; i < value.length; i++) {
        const user = value[i];
        if (user.username === this.username) {
          this.userService.doLogin(user);
          // noinspection JSIgnoredPromiseFromCall
          this.router.navigate(['/home']);
          break;
        }
      }
    })
  }
}
