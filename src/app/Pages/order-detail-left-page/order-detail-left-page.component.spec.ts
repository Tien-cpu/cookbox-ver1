import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailLeftPageComponent } from './order-detail-left-page.component';

describe('OrderDetailLeftPageComponent', () => {
  let component: OrderDetailLeftPageComponent;
  let fixture: ComponentFixture<OrderDetailLeftPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailLeftPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailLeftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
