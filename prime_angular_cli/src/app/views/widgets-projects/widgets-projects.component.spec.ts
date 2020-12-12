import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsProjectsComponent } from './widgets-projects.component';

describe('WidgetsProjectsComponent', () => {
  let component: WidgetsProjectsComponent;
  let fixture: ComponentFixture<WidgetsProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
