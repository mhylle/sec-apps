import {TestBed} from '@angular/core/testing';

import {EventService} from './event.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('EventService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [],
    imports: [HttpClientTestingModule],
    providers: []
  }));

  it('should be created', () => {
    const service: EventService = TestBed.get(EventService);
    expect(service).toBeTruthy();
  });
});
