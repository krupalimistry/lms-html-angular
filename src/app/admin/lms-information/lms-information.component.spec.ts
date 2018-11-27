import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsInformationComponent } from './lms-information.component';

describe('LmsInformationComponent', () => {
  let component: LmsInformationComponent;
  let fixture: ComponentFixture<LmsInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
