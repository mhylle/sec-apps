import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {User} from "../model/user";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User;
  private userSource = new Subject<User>();
  userLoggedIn$ = this.userSource.asObservable();

  constructor(private http: HttpClient) {
  }

  get users(): Observable<User[]> {
    return this.http.get<User[]>(environment.backend + '/users');
  }

  addUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(environment.backend + '/users/', user);
  }

  isLoggedIn(user: User) {
    return this.currentUser === user && this.currentUser != null;;
  }

  doLogin(user: User) {
    this.currentUser = user;
    this.userSource.next(user);
  }

  doLogout() {
    this.currentUser = null;
    this.userSource.next(null);
  }
}
