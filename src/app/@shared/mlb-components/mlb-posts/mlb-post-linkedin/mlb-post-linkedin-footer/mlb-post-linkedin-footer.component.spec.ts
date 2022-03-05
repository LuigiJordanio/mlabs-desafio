import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbPostLinkedinFooterComponent } from './mlb-post-linkedin-footer.component';

describe('MlbPostLinkedinFooterComponent', () => {
  let component: MlbPostLinkedinFooterComponent;
  let fixture: ComponentFixture<MlbPostLinkedinFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbPostLinkedinFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbPostLinkedinFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
