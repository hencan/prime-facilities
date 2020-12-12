import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAdminUpdateComponent } from './services-admin-update.component';

describe('ServicesAdminUpdateComponent', () => {
  let component: ServicesAdminUpdateComponent;
  let fixture: ComponentFixture<ServicesAdminUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesAdminUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesAdminUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
