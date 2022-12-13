import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../services/alumnos.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Alumno } from '../interfaces/alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
})
export class AlumnosComponent implements OnInit {
  public alumnos: Alumno[] = [];
  public documentId = '1';
  public currentStatus = 1;
  public newAlumnoForm = this.fbs.group({
    nombre: ['', Validators.required],
    curso: ['', Validators.required],
    apellidos: [''],
  });

  constructor(
    private alumnosService: AlumnosService,
    private fbs: FormBuilder
  ) {}

  ngOnInit(): void {
    this.alumnosService.getAlumnos().subscribe((alumnosSnapshot) => {
      this.alumnos = [];
      alumnosSnapshot.forEach((alumnoData: any) => {
        this.documentId = alumnoData.payload.doc.id;
        this.alumnos.push({
          id: this.documentId,
          ...alumnoData.payload.doc.data(),
        });
      });
      console.log(this.alumnos);
    });
  }

  public nuevoAlumno(documentId = this.documentId) {
    console.log(`Status: ${this.currentStatus}`);
    if (this.currentStatus == 1) {
      this.creaAlumno();
    } else {
      this.updateAlumno(documentId);
    }
  }

  creaAlumno() {
    let data: any = this.newAlumnoForm.value;
    this.alumnosService.createAlumno(data).then(
      () => {
        console.log('Documento creado correctamente!');
        this.vaciaForm();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateAlumno(documentId: string) {
    let data = this.newAlumnoForm.value;
    this.alumnosService.updateAlumno(documentId, data).then(
      () => {
        this.currentStatus = 1;
        this.vaciaForm();
        console.log('DOcumento editado correctamente.');
      },
      (error) => {
        console.error(error);
      }
    );
  }

  private vaciaForm() {
    this.newAlumnoForm.setValue({
      nombre: '',
      curso: '',
      apellidos: '',
    });
  }
}
