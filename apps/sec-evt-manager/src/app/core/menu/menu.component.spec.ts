import {LayoutModule} from '@angular/cdk/layout';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MenuComponent} from './menu.component';
import {MaterialModule} from "../material-module/material.module";
import {FormsModule} from "@angular/forms";
import {OwlDateTimeModule, OwlNativeDateTimeModule} from "ng-pick-datetime";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [
        BrowserAnimationsModule,
        LayoutModule,
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        MaterialModule
      ],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
