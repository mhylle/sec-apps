import {Component, OnInit} from '@angular/core';
import {EventService} from "../../../services/event.service";
import {SecEvent} from "../../../model/secEvent";
import {UserService} from "../../../services/user.service";
import {isDefined} from "@angular/compiler/src/util";
import {User} from "../../../model/user";

@Component({
  selector: 'sec-apps-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  showOld = true;
  secEvents: SecEvent[];
  oldEvents: SecEvent[];
  currentUser: User = null;

  constructor(private eventService: EventService, private userService: UserService) {
  }

  ngOnInit() {
    this.eventService.events.subscribe(response => {
      if (this.showOld) {
        this.oldEvents = response.filter(value => {
          if (value.endTime) {
            const d = new Date(value.endTime);
            return d.valueOf() < new Date().valueOf();
          } else {
            return +1;
          }
        });
        this.secEvents = response.filter(value => {
          if (value.endTime) {
            const d = new Date(value.endTime);
            return d.valueOf() >= new Date().valueOf();
          } else {
            return -1;
          }
        });
      } else {
        this.secEvents = response.filter(value => {
          if (value.endTime) {
            const d = new Date(value.endTime);
            return d.valueOf() >= new Date().valueOf();
          } else {
            return +1;
          }
        });
      }
    });
    this.userService.userLoggedIn$.subscribe(value => {
      if (value != null) {
        console.log('user logged in: ' + value.username);
      } else {
        console.log('user logged out' );
      }
      this.currentUser = value;
    })
  }

  signed(secEvent: SecEvent): boolean {
    if (!isDefined(this.currentUser) || this.currentUser === null) {
      return false;
    }
    if (secEvent.attendees && secEvent.attendees.length > 0) {
      const users = secEvent.attendees.filter(value => value.username === this.currentUser.username);
      return users.length > 0;
    }
    return false;
  }

  attend(secEvent: SecEvent) {
    if (!secEvent.attendees) {
      secEvent.attendees = [];
    }
    this.eventService.attend(secEvent, this.currentUser).subscribe(response => {

    });
  }

  unattend(secEvent: SecEvent) {
    if (!secEvent.attendees) {
      secEvent.attendees = [];
    } else {
      secEvent.attendees.filter(value => value.username !== this.currentUser.username);
    }
    console.log('unattend')
  }
}
