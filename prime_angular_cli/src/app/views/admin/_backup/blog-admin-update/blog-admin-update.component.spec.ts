import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAdminUpdateComponent } from './blog-admin-update.component';

describe('BlogAdminUpdateComponent', () => {
  let component: BlogAdminUpdateComponent;
  let fixture: ComponentFixture<BlogAdminUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogAdminUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAdminUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
