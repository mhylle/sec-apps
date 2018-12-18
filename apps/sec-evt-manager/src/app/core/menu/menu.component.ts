import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {isDefined} from "@angular/compiler/src/util";

@Component({
  selector: 'sec-apps-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {


  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
  }

  login() {
    // noinspection JSIgnoredPromiseFromCall
    this.router.navigate(['/login']);
  }

  logout() {
    this.userService.doLogout();
    // noinspection JSIgnoredPromiseFromCall
    this.router.navigate(['/home']);
  }

  isViableMenuItem(menu: string) {
    if (menu === 'login' && this.userService.currentUser === null) {
      return true;
    }
    if (menu === 'login' && this.userService.currentUser !== null) {
      return false;
    }
    if (menu === 'logout' && this.userService.currentUser !== null) {
      return true;
    }
    if (isDefined(this.userService.currentUser) && this.userService.currentUser !== null) {
      return this.userService.currentUser.accessLevel === 'admin';
    }
    return false;

  }
}
