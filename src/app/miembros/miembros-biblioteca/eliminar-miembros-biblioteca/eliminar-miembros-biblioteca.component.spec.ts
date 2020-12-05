import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMiembrosBibliotecaComponent } from './eliminar-miembros-biblioteca.component';

describe('EliminarMiembrosBibliotecaComponent', () => {
  let component: EliminarMiembrosBibliotecaComponent;
  let fixture: ComponentFixture<EliminarMiembrosBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarMiembrosBibliotecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarMiembrosBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
