import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMenuDetailLeftPageComponent } from './update-menu-detail-left-page.component';

describe('UpdateMenuDetailLeftPageComponent', () => {
  let component: UpdateMenuDetailLeftPageComponent;
  let fixture: ComponentFixture<UpdateMenuDetailLeftPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMenuDetailLeftPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMenuDetailLeftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
