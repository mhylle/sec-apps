import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NxModule} from '@nrwl/nx';
import {RouterModule} from '@angular/router';
import {CreateUserComponent} from './admin/users/create/create-user.component';
import {ViewUserComponent} from './admin/users/view/view-user.component';
import {ListUserComponent} from './admin/users/list/list-user.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {MenuComponent} from './core/menu/menu.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {ListEventComponent} from "./admin/events/list/list-event.component";
import {CreateEventComponent} from "./admin/events/create/create-event.component";
import {OwlDateTimeModule, OwlNativeDateTimeModule} from "ng-pick-datetime";
import {ViewEventComponent} from "./admin/events/view/view-event.component";
import { EventAttendeesComponent } from './admin/events/view/attendees/event-attendees.component';

@NgModule({
  declarations: [AppComponent, CreateUserComponent, ViewUserComponent, ListUserComponent, MenuComponent, CreateEventComponent, ListEventComponent, ViewEventComponent, EventAttendeesComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], {initialNavigation: 'enabled'}),
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
