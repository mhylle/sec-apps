import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {ListEventComponent} from "../admin/events/list/list-event.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MaterialModule} from "../core/material-module/material.module";
import {EventService} from "../services/event.service";
import {UserService} from "../services/user.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, ListEventComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, MaterialModule],
      providers: [EventService, UserService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
