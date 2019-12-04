import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekPredictComponent } from './week-predict.component';

describe('WeekPredictComponent', () => {
  let component: WeekPredictComponent;
  let fixture: ComponentFixture<WeekPredictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekPredictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekPredictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
