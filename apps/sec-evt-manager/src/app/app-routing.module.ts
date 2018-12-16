import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateUserComponent} from "./admin/users/create/create-user.component";
import {ListUserComponent} from "./admin/users/list/list-user.component";
import {ListEventComponent} from "./admin/events/list/list-event.component";
import {CreateEventComponent} from "./admin/events/create/create-event.component";
import {EventAttendeesComponent} from "./admin/events/view/attendees/event-attendees.component";
import {LoginComponent} from "./core/security/login/login.component";
import {AuthGuard} from "./core/security/auth/auth.guard";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'createUser',
    component: CreateUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'listUsers',
    component: ListUserComponent
  },
  {
    path: 'createEvent',
    component: CreateEventComponent
  },
  {
    path: 'listEvents',
    component: ListEventComponent
  },
  {
    path: 'event/:id/attendees',
    component: EventAttendeesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
