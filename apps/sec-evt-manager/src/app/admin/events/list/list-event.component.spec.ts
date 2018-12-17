import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListEventComponent} from './list-event.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "@angular/cdk/layout";
import {OwlDateTimeModule, OwlNativeDateTimeModule} from "ng-pick-datetime";
import {MaterialModule} from "../../../core/material-module/material.module";
import {RouterTestingModule} from "@angular/router/testing";

describe('ListEventComponent', () => {
  let component: ListEventComponent;
  let fixture: ComponentFixture<ListEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListEventComponent],
      imports: [FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterTestingModule,
        LayoutModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        MaterialModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
