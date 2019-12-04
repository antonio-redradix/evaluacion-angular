import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayPredictComponent } from './day-predict.component';

describe('DayPredictComponent', () => {
  let component: DayPredictComponent;
  let fixture: ComponentFixture<DayPredictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayPredictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayPredictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
