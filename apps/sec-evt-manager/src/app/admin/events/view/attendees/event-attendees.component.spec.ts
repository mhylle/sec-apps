import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventAttendeesComponent} from './event-attendees.component';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from "ng-pick-datetime";
import {MaterialModule} from "../../../../core/material-module/material.module";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('EventAttendeesComponent', () => {
  let component: EventAttendeesComponent;
  let fixture: ComponentFixture<EventAttendeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventAttendeesComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MaterialModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAttendeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
