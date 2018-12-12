import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpClient) {
  }

  get events(): Observable<Event[]> {
    return this.http.get<Event[]>(environment.backend + '/events');
  }

  addEvent(event: Event): Observable<Event[]> {
    return this.http.post<Event[]>(environment.backend + '/events/', event);
  }
}
