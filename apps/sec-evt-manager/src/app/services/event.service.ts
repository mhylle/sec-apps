import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {SecEvent} from "../model/secEvent";

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
}
