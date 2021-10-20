import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NemuMainPageComponent } from './nemu-main-page.component';

describe('NemuMainPageComponent', () => {
  let component: NemuMainPageComponent;
  let fixture: ComponentFixture<NemuMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NemuMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NemuMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
