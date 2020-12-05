import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarRevistaComponent } from './eliminar-revista.component';

describe('EliminarRevistaComponent', () => {
  let component: EliminarRevistaComponent;
  let fixture: ComponentFixture<EliminarRevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarRevistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarRevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
