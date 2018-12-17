import {Component, OnInit} from '@angular/core';
import {switchMap} from "rxjs/operators";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {EventService} from "../../../../services/event.service";
import {Observable} from "rxjs";
import {SecEvent} from "../../../../model/secEvent";

@Component({
  selector: 'sec-apps-event-attendees',
  templateUrl: './event-attendees.component.html',
  styleUrls: ['./event-attendees.component.css']
})
export class EventAttendeesComponent implements OnInit {
  private $event: Observable<SecEvent>;
   secEvent: SecEvent;

  constructor(private route: ActivatedRoute, private eventService: EventService) {
  }

  ngOnInit() {
    this.$event = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.eventService.getEvent(params.get('id'));
      }));
    this.$event.subscribe(response => {
      console.log(response.id + ':' + response.name);
      this.secEvent = response;
    })
  }

}
