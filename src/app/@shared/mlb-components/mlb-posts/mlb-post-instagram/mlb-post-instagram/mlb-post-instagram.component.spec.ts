import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbPostInstagramComponent } from './mlb-post-instagram.component';

describe('MlbPostInstagramComponent', () => {
  let component: MlbPostInstagramComponent;
  let fixture: ComponentFixture<MlbPostInstagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbPostInstagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbPostInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
