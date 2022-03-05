import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbFormTextareaComponent } from './mlb-form-textarea.component';

describe('MlbFormTextareaComponent', () => {
  let component: MlbFormTextareaComponent;
  let fixture: ComponentFixture<MlbFormTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbFormTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbFormTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
