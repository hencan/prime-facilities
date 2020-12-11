import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsServicesComponent } from './widgets-services.component';

describe('WidgetsServicesComponent', () => {
  let component: WidgetsServicesComponent;
  let fixture: ComponentFixture<WidgetsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
