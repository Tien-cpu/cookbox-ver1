import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDetailLeftPageComponent } from './menu-detail-left-page.component';

describe('MenuDetailLeftPageComponent', () => {
  let component: MenuDetailLeftPageComponent;
  let fixture: ComponentFixture<MenuDetailLeftPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDetailLeftPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDetailLeftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
