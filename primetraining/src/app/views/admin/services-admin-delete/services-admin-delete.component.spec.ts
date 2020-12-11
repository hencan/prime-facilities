import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAdminDeleteComponent } from './services-admin-delete.component';

describe('ServicesAdminDeleteComponent', () => {
  let component: ServicesAdminDeleteComponent;
  let fixture: ComponentFixture<ServicesAdminDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesAdminDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesAdminDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
