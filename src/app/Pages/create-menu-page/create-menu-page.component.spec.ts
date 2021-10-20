import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMenuPageComponent } from './create-menu-page.component';

describe('CreateMenuPageComponent', () => {
  let component: CreateMenuPageComponent;
  let fixture: ComponentFixture<CreateMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMenuPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
