import {Component, OnInit} from '@angular/core';
import {EventService} from "../../../services/event.service";
import {SecEvent} from "../../../model/secEvent";

@Component({
  selector: 'sec-apps-list',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  secEvents: SecEvent[];

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.eventService.events.subscribe(response => this.secEvents = response);
  }
}
