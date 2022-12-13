import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMascotasComponent } from './formulario-mascotas.component';

describe('FormularioMascotasComponent', () => {
  let component: FormularioMascotasComponent;
  let fixture: ComponentFixture<FormularioMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioMascotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
