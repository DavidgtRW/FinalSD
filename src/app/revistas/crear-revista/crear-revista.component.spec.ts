import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRevistaComponent } from './crear-revista.component';

describe('CrearRevistaComponent', () => {
  let component: CrearRevistaComponent;
  let fixture: ComponentFixture<CrearRevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRevistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
