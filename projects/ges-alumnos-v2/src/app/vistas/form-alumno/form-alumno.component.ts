import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../modelo/alumnos.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css'],
})
export class FormAlumnoComponent implements OnInit {
  alumno?: any;
  nuevoAlumno = true;
  // Aquí crear el formulario con el formbuilder
  alumnoForm = this.formBuilder.group({
    idAlumno: ['', Validators.required],
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    curso: ['', Validators.required],
  });
  documentId: string = '';

  constructor(
    private alumnosService: AlumnosService,
    private ruta: ActivatedRoute,
    private formBuilder: FormBuilder,
    private locate: Location
  ) {}

  ngOnInit(): void {
    if (this.ruta.snapshot.paramMap.get('documentId')) {
      this.nuevoAlumno = false;
      // Cargar los datos del alumno en el formulario
      this.documentId = this.ruta.snapshot.paramMap.get('documentId')!;
      this.alumnosService.getAlumno(this.documentId).subscribe((data) => {
        this.nuevoAlumno = false;
        this.alumno = data.payload.data();
        this.alumnoForm.setValue({
          idAlumno: this.alumno.idAlumno,
          nombre: this.alumno.nombre,
          apellidos: this.alumno.apellidos,
          curso: this.alumno.curso,
        });
      });
    } else {
      // Es un nuevo alumno
      this.nuevoAlumno = true;
    }
  }

  updateAlumno(form: any, documentId = this.documentId) {
    console.log('Hola soy updateAlumno');
    if (this.nuevoAlumno) {
      // es nuevo alumno lo creamos
      // Cogemos los valores del formulario para el nuevo alumno
      this.alumno = this.alumnoForm.value;
      console.log(this.alumno);
      // Enviamos los datos al servicio para que lo envíe a la base de datos
      this.alumnosService.newAlumno(this.alumno).then(
        () => {
          console.log('Alumno creado');
          // Si todo va bien, vaciamos el formulario
          this.alumnoForm.setValue({
            idAlumno: '',
            nombre: '',
            apellidos: '',
            curso: '',
          });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      // Es actualización, lo actualizamos
      // Primero tomamos los datos del formulario
      let data: any = {
        idAlumno: form.idAlumno,
        nombre: form.nombre,
        apellidos: form.apellidos,
        curso: form.curso,
      };
      // Luego lo enviamos al servicio para que lo actualice
      this.alumnosService.updateAlumno(this.documentId, data).then(
        () => {
          console.log('Alumno actualizado');
          this.locate.back();
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
