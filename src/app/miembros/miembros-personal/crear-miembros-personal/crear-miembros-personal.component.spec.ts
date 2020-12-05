import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMiembrosPersonalComponent } from './crear-miembros-personal.component';

describe('CrearMiembrosPersonalComponent', () => {
  let component: CrearMiembrosPersonalComponent;
  let fixture: ComponentFixture<CrearMiembrosPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearMiembrosPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMiembrosPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
