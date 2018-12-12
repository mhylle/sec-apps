import { async, TestBed } from '@angular/core/testing';
import { MhUtilsModule } from './mh-utils.module';

describe('MhUtilsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MhUtilsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MhUtilsModule).toBeDefined();
  });
});
