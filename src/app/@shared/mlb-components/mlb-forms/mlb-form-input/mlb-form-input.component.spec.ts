import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbFormInputComponent } from './mlb-form-input.component';

describe('MlbFormInputComponent', () => {
  let component: MlbFormInputComponent;
  let fixture: ComponentFixture<MlbFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbFormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
