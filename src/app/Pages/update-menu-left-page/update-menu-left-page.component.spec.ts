import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMenuLeftPageComponent } from './update-menu-left-page.component';

describe('UpdateMenuLeftPageComponent', () => {
  let component: UpdateMenuLeftPageComponent;
  let fixture: ComponentFixture<UpdateMenuLeftPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMenuLeftPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMenuLeftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
