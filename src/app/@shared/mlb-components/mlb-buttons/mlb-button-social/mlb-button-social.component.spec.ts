import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbButtonSocialComponent } from './mlb-button-social.component';

describe('MlbButtonSocialComponent', () => {
  let component: MlbButtonSocialComponent;
  let fixture: ComponentFixture<MlbButtonSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbButtonSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbButtonSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
