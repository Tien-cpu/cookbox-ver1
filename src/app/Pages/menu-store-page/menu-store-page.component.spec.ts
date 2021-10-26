import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStorePageComponent } from './menu-store-page.component';

describe('MenuStorePageComponent', () => {
  let component: MenuStorePageComponent;
  let fixture: ComponentFixture<MenuStorePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuStorePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuStorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
