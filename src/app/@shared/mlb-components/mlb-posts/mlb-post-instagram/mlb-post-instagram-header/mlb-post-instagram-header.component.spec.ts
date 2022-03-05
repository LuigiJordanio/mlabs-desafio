import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbPostInstagramHeaderComponent } from './mlb-post-instagram-header.component';

describe('MlbPostInstagramHeaderComponent', () => {
  let component: MlbPostInstagramHeaderComponent;
  let fixture: ComponentFixture<MlbPostInstagramHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbPostInstagramHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbPostInstagramHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
