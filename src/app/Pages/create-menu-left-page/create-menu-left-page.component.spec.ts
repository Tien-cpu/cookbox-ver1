import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMenuLeftPageComponent } from './create-menu-left-page.component';

describe('CreateMenuLeftPageComponent', () => {
  let component: CreateMenuLeftPageComponent;
  let fixture: ComponentFixture<CreateMenuLeftPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMenuLeftPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMenuLeftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
