import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbPostComponent } from './mlb-post.component';

describe('MlbPostComponent', () => {
  let component: MlbPostComponent;
  let fixture: ComponentFixture<MlbPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
