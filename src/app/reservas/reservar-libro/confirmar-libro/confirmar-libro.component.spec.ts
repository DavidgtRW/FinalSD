import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarLibroComponent } from './confirmar-libro.component';

describe('ConfirmarLibroComponent', () => {
  let component: ConfirmarLibroComponent;
  let fixture: ComponentFixture<ConfirmarLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarLibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
