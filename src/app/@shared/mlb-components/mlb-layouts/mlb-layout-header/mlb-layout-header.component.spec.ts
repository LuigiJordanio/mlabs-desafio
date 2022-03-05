import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbLayoutHeaderComponent } from './mlb-layout-header.component';

describe('MlbLayoutHeaderComponent', () => {
  let component: MlbLayoutHeaderComponent;
  let fixture: ComponentFixture<MlbLayoutHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbLayoutHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
