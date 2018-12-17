import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateEventComponent} from './create-event.component';
import {MaterialModule} from "../../../core/material-module/material.module";
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule} from "@angular/forms";
import {OwlDateTimeModule, OwlNativeDateTimeModule} from "ng-pick-datetime";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('CreateEventComponent', () => {
  let component: CreateEventComponent;
  let fixture: ComponentFixture<CreateEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEventComponent],
      imports: [BrowserAnimationsModule, FormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MaterialModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
