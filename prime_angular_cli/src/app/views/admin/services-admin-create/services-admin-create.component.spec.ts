import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAdminCreateComponent } from './services-admin-create.component';

describe('ServicesAdminCreateComponent', () => {
  let component: ServicesAdminCreateComponent;
  let fixture: ComponentFixture<ServicesAdminCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesAdminCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesAdminCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
