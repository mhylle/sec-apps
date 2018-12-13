import {Component, OnInit} from '@angular/core';
import {SecEvent} from "../../../model/secEvent";

@Component({
  selector: 'sec-apps-view',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {
  secEvent: SecEvent;

  constructor() {
  }

  ngOnInit() {
    this.secEvent = new SecEvent();
    this.secEvent.name = 'tst';
  }

}
