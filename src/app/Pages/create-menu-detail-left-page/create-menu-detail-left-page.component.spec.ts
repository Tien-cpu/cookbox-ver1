import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMenuDetailLeftPageComponent } from './create-menu-detail-left-page.component';

describe('CreateMenuDetailLeftPageComponent', () => {
  let component: CreateMenuDetailLeftPageComponent;
  let fixture: ComponentFixture<CreateMenuDetailLeftPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMenuDetailLeftPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMenuDetailLeftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
