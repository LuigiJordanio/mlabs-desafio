import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbPostLinkedinHeaderComponent } from './mlb-post-linkedin-header.component';

describe('MlbPostLinkedinHeaderComponent', () => {
  let component: MlbPostLinkedinHeaderComponent;
  let fixture: ComponentFixture<MlbPostLinkedinHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbPostLinkedinHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbPostLinkedinHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
