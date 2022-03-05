import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbStatusComponent } from './mlb-status.component';

describe('MlbStatusComponent', () => {
  let component: MlbStatusComponent;
  let fixture: ComponentFixture<MlbStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
