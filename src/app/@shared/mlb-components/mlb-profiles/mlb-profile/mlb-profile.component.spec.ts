import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbProfileComponent } from './mlb-profile.component';

describe('MlbProfileComponent', () => {
  let component: MlbProfileComponent;
  let fixture: ComponentFixture<MlbProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
