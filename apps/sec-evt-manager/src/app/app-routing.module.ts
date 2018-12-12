import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateUserComponent} from "./users/create/create-user.component";
import {ListUserComponent} from "./users/list/list-user.component";

const routes: Routes = [
  {
    path: 'createUser',
    component: CreateUserComponent
  },
  {
    path: 'listUsers',
    component: ListUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
