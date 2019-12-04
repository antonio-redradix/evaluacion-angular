import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisionPanelComponent } from './prevision-panel.component';

describe('PrevisionPanelComponent', () => {
  let component: PrevisionPanelComponent;
  let fixture: ComponentFixture<PrevisionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevisionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevisionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
