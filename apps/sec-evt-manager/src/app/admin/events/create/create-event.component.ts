import {Component, OnInit} from '@angular/core';
import {EventService} from "../../../services/event.service";
import {SecEvent} from "../../../model/secEvent";

@Component({
  selector: 'sec-apps-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  newEvent: SecEvent = new SecEvent();

  nameLabel = "Name";
  descriptionLabel = "Description";
  fromLabel = "From";
  toLabel = "To";
  signStartLabel = "Signup starts";
  signEndLabel = "Can signup until";
  signCancelTimeLabel = "Can cancel sign until";
  locationLabel = "Takes place at ";
  maxAttendeesLabel = "Maximum amount of attendees";
  feeLabel = "Fee for attendance";
  noShowLabel = "Fee is non show";

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
  }

  create() {
    this.eventService.addEvent(this.newEvent).subscribe(value => this.newEvent = new SecEvent());
  }
}
