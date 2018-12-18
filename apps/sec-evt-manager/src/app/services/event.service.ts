import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
import {SecEvent} from "../model/secEvent";
import {User} from "../model/user";
import {isDefined} from "@angular/compiler/src/util";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpClient) {
  }

  get events(): Observable<SecEvent[]> {
    return this.http.get<SecEvent[]>(environment.backend + '/events');
  }

  addEvent(event: SecEvent): Observable<SecEvent[]> {
    return this.http.post<SecEvent[]>(environment.backend + '/events/', event);
  }

  getEvent(id: string): Observable<SecEvent> {
    return this.http.get<SecEvent>(environment.backend + '/events/' + id);
  }

  attend(secEvent: SecEvent, currentUser: User): Observable<SecEvent> {
    if (!isDefined(secEvent.attendees) || secEvent.attendees === null) {
      secEvent.attendees = [];
    }
    if (secEvent.attendees.find(value => value.username === currentUser.username)) {
      return of();
    } else {
      secEvent.attendees.push(currentUser);
    }
    return this.http.put<SecEvent>(environment.backend + '/events/' + secEvent.id, secEvent);
  }

  unattend(secEvent: SecEvent, currentUser: User): Observable<SecEvent> {
    if (!isDefined(secEvent.attendees) || secEvent.attendees === null) {
      secEvent.attendees = [];
    }
    secEvent.attendees = secEvent.attendees.filter(value =>  value.username !== currentUser.username);
    return this.http.put<SecEvent>(environment.backend + '/events/' + secEvent.id, secEvent);
  }
}
