import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbLayoutFooterComponent } from './mlb-layout-footer.component';

describe('MlbLayoutFooterComponent', () => {
  let component: MlbLayoutFooterComponent;
  let fixture: ComponentFixture<MlbLayoutFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbLayoutFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbLayoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
