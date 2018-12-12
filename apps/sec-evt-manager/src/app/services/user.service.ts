import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  get users(): Observable<User[]> {
    return this.http.get<User[]>(environment.backend + '/users');
  }

  addUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(environment.backend + '/users/', user);
  }
}
