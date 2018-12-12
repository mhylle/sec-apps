import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateUserComponent} from "./admin/users/create/create-user.component";
import {ListUserComponent} from "./admin/users/list/list-user.component";
import {ListEventComponent} from "./admin/events/list/list-event.component";
import {CreateEventComponent} from "./admin/events/create/create-event.component";

const routes: Routes = [
  {
    path: 'createUser',
    component: CreateUserComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
