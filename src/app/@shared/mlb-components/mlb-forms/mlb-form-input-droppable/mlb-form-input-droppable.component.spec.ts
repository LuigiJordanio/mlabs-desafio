import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbFormInputDroppableComponent } from './mlb-form-input-droppable.component';

describe('MlbFormInputDroppableComponent', () => {
  let component: MlbFormInputDroppableComponent;
  let fixture: ComponentFixture<MlbFormInputDroppableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbFormInputDroppableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbFormInputDroppableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
