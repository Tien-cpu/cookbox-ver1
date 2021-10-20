import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EployeePageComponent } from './eployee-page.component';

describe('EployeePageComponent', () => {
  let component: EployeePageComponent;
  let fixture: ComponentFixture<EployeePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EployeePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EployeePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
