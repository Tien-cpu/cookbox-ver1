import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNemuMainPageComponent } from './create-nemu-main-page.component';

describe('CreateNemuMainPageComponent', () => {
  let component: CreateNemuMainPageComponent;
  let fixture: ComponentFixture<CreateNemuMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNemuMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNemuMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
