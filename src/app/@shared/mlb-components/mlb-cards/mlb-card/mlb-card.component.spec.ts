import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbCardComponent } from './mlb-card.component';

describe('MlbCardComponent', () => {
  let component: MlbCardComponent;
  let fixture: ComponentFixture<MlbCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
