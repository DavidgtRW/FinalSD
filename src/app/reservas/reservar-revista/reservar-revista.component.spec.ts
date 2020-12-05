import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarRevistaComponent } from './reservar-revista.component';

describe('ReservarRevistaComponent', () => {
  let component: ReservarRevistaComponent;
  let fixture: ComponentFixture<ReservarRevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservarRevistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservarRevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
