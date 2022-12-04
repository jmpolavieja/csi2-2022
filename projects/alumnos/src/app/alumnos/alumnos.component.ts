import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../services/alumnos.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
})
export class AlumnosComponent implements OnInit {
  public alumnos: any[] = [];
  public documentId = '1';
  public currentStatus = 1;
  public newAlumnoForm = this.fbs.group({
    name: ['', Validators.required],
    curso: ['', Validators.required],
    id: [''],
  });

  constructor(
    private alumnosService: AlumnosService,
    private fbs: FormBuilder
  ) {}

  ngOnInit(): void {
    this.alumnosService.getAlumnos().subscribe((alumnosSnapshot) => {
      this.alumnos = [];
      alumnosSnapshot.forEach((alumnoData: any) => {
        this.alumnos.push({
          id: alumnoData.payload.doc.id,
          data: alumnoData.payload.doc.data(),
        });
      });
    });
  }

  public nuevoAlumno(form: any, documentId = this.documentId) {
    console.log(`Status: ${this.currentStatus}`);
    if (this.currentStatus == 1) {
      let data = { name: form.name, curso: form.curso };
      this.alumnosService.createAlumno(data).then(
        () => {
          console.log('Documento creado correctamente!');
          this.vaciaForm();
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      let data = {
        name: form.name,
        curso: form.curso,
      };
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
  }

  private vaciaForm() {
    this.newAlumnoForm.setValue({
      name: '',
      curso: '',
      id: '',
    });
  }
}
