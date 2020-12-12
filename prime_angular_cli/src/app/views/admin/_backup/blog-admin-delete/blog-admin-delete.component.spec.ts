import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAdminDeleteComponent } from './blog-admin-delete.component';

describe('BlogAdminDeleteComponent', () => {
  let component: BlogAdminDeleteComponent;
  let fixture: ComponentFixture<BlogAdminDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogAdminDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAdminDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
