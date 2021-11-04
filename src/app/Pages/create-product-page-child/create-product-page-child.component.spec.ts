import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChildProductPageComponent } from './create-product-page-child.component';

describe('UpdateProductPageComponent', () => {
  let component: UpdateChildProductPageComponent;
  let fixture: ComponentFixture<UpdateChildProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateChildProductPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateChildProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
