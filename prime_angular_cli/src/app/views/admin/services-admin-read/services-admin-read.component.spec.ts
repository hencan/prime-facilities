import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAdminReadComponent } from './services-admin-read.component';

describe('ServicesAdminReadComponent', () => {
  let component: ServicesAdminReadComponent;
  let fixture: ComponentFixture<ServicesAdminReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesAdminReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesAdminReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
