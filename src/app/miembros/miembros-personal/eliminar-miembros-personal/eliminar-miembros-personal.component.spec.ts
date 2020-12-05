import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMiembrosPersonalComponent } from './eliminar-miembros-personal.component';

describe('EliminarMiembrosPersonalComponent', () => {
  let component: EliminarMiembrosPersonalComponent;
  let fixture: ComponentFixture<EliminarMiembrosPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarMiembrosPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarMiembrosPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
