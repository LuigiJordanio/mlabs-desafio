import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleSaveComponent } from './schedule-save.component';

describe('ScheduleSaveComponent', () => {
  let component: ScheduleSaveComponent;
  let fixture: ComponentFixture<ScheduleSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
