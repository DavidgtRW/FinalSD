import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarRevistaComponent } from './consultar-revista.component';

describe('ConsultarRevistaComponent', () => {
  let component: ConsultarRevistaComponent;
  let fixture: ComponentFixture<ConsultarRevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarRevistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarRevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
