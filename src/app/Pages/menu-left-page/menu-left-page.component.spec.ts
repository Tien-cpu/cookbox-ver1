import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLeftPageComponent } from './menu-left-page.component';

describe('MenuLeftPageComponent', () => {
  let component: MenuLeftPageComponent;
  let fixture: ComponentFixture<MenuLeftPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLeftPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLeftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
