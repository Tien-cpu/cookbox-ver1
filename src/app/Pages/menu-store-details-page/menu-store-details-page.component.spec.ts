import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStoreDetailsPageComponent } from './menu-store-details-page.component';

describe('MenuStoreDetailsPageComponent', () => {
  let component: MenuStoreDetailsPageComponent;
  let fixture: ComponentFixture<MenuStoreDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuStoreDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuStoreDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
