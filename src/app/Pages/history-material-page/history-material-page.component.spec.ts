import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryMaterialPageComponent } from './history-material-page.component';

describe('HistoryMaterialPageComponent', () => {
  let component: HistoryMaterialPageComponent;
  let fixture: ComponentFixture<HistoryMaterialPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryMaterialPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryMaterialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
