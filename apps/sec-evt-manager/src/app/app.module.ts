import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NxModule} from '@nrwl/nx';
import {RouterModule} from '@angular/router';
import {CreateUserComponent} from './users/create/create-user.component';
import {ViewUserComponent} from './users/view/view-user.component';
import {ListUserComponent} from './users/list/list-user.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, CreateUserComponent, ViewUserComponent, ListUserComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], {initialNavigation: 'enabled'}),
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
