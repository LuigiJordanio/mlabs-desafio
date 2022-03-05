import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbPostInstagramFooterComponent } from './mlb-post-instagram-footer.component';

describe('MlbPostInstagramFooterComponent', () => {
  let component: MlbPostInstagramFooterComponent;
  let fixture: ComponentFixture<MlbPostInstagramFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbPostInstagramFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbPostInstagramFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
