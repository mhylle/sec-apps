import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateUserComponent} from './create-user.component';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {LayoutModule} from "@angular/cdk/layout";
import {OwlDateTimeModule, OwlNativeDateTimeModule} from "ng-pick-datetime";
import {MaterialModule} from "../../../core/material-module/material.module";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUserComponent],
      imports: [BrowserModule,
        FormsModule,
        HttpClientTestingModule,
        LayoutModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        MaterialModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
