import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorCourseFormComponent } from './instructor-course-form.component';

describe('InstructorCourseFormComponent', () => {
  let component: InstructorCourseFormComponent;
  let fixture: ComponentFixture<InstructorCourseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorCourseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
