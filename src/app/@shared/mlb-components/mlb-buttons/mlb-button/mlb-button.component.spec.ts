import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbButtonComponent } from './mlb-button.component';

describe('MlbButtonComponent', () => {
  let component: MlbButtonComponent;
  let fixture: ComponentFixture<MlbButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
