import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMenuPageComponent } from './update-menu-page.component';

describe('UpdateMenuPageComponent', () => {
  let component: UpdateMenuPageComponent;
  let fixture: ComponentFixture<UpdateMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMenuPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
