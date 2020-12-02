import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembrosBibliotecaComponent } from './miembros-biblioteca.component';

describe('MiembrosBibliotecaComponent', () => {
  let component: MiembrosBibliotecaComponent;
  let fixture: ComponentFixture<MiembrosBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiembrosBibliotecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiembrosBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
