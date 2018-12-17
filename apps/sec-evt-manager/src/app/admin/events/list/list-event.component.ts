import {Component, OnInit} from '@angular/core';
import {EventService} from "../../../services/event.service";
import {SecEvent} from "../../../model/secEvent";
import {UserService} from "../../../services/user.service";
import {isDefined} from "@angular/compiler/src/util";

@Component({
  selector: 'sec-apps-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  showOld = true;
  secEvents: SecEvent[];
  private oldEvents: SecEvent[];

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
  }

  // isSigned(secEvent: SecEvent, user: User) : boolean {
  //
  // }

  signed(secEvent: SecEvent): boolean {
    const currentUser = this.userService.currentUser;
    if (isDefined(currentUser) || currentUser === null) {
      return false;
    }
    if (secEvent.attendees) {
      const users = secEvent.attendees.filter(value => value.username === currentUser.username);
      return users.length > 0;
    }
    return false;


  }

  attend(secEvent: SecEvent) {
    if (!secEvent.attendees) {
      secEvent.attendees = [];
    }
    secEvent.attendees.push(this.userService.currentUser);
    console.log('attend');

  }

  unattend(secEvent: SecEvent) {
    if (!secEvent.attendees) {
      secEvent.attendees = [];
    } else {
      secEvent.attendees.filter(value => value.username !== this.userService.currentUser.username);
    }
    console.log('unattend')
  }
}
