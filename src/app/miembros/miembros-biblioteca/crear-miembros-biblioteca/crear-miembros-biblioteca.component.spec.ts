import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMiembrosBibliotecaComponent } from './crear-miembros-biblioteca.component';

describe('CrearMiembrosBibliotecaComponent', () => {
  let component: CrearMiembrosBibliotecaComponent;
  let fixture: ComponentFixture<CrearMiembrosBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearMiembrosBibliotecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMiembrosBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
