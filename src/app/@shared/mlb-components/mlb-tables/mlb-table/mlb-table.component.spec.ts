import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbTableComponent } from './mlb-table.component';

describe('MlbTableComponent', () => {
  let component: MlbTableComponent;
  let fixture: ComponentFixture<MlbTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
