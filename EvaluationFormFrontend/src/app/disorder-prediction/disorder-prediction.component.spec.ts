import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisorderPredictionComponent } from './disorder-prediction.component';

describe('DisorderPredictionComponent', () => {
  let component: DisorderPredictionComponent;
  let fixture: ComponentFixture<DisorderPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisorderPredictionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisorderPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
