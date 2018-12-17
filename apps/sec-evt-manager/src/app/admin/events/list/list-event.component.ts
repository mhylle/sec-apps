import {Component, OnInit} from '@angular/core';
import {EventService} from "../../../services/event.service";
import {SecEvent} from "../../../model/secEvent";

@Component({
  selector: 'sec-apps-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  showOld = true;
  secEvents: SecEvent[];
  private oldEvents: SecEvent[];

  constructor(private eventService: EventService) {
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
}
