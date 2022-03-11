import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbPostLinkedinComponent } from './mlb-post-linkedin.component';

describe('MlbPostLinkedinComponent', () => {
  let component: MlbPostLinkedinComponent;
  let fixture: ComponentFixture<MlbPostLinkedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbPostLinkedinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbPostLinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
