import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarLibroPersonalComponent } from './confirmar-libro-personal.component';

describe('ConfirmarLibroPersonalComponent', () => {
  let component: ConfirmarLibroPersonalComponent;
  let fixture: ComponentFixture<ConfirmarLibroPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarLibroPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarLibroPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
