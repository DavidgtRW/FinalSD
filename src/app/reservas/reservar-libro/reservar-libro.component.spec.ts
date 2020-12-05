import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarLibroComponent } from './reservar-libro.component';

describe('ReservarLibroComponent', () => {
  let component: ReservarLibroComponent;
  let fixture: ComponentFixture<ReservarLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservarLibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservarLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
