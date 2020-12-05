import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarRevistaComponent } from './confirmar-revista.component';

describe('ConfirmarRevistaComponent', () => {
  let component: ConfirmarRevistaComponent;
  let fixture: ComponentFixture<ConfirmarRevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarRevistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarRevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
