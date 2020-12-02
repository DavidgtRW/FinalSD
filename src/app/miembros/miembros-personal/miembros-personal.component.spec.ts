import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembrosPersonalComponent } from './miembros-personal.component';

describe('MiembrosPersonalComponent', () => {
  let component: MiembrosPersonalComponent;
  let fixture: ComponentFixture<MiembrosPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiembrosPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiembrosPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
