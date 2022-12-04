import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../modelo/alumno.interfaz';
import { AlumnosService } from '../../modelo/alumnos.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  alumnos: {id:any, data: Alumno}[] = [];

  constructor(private alumnosService: AlumnosService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.alumnosService.getAll().subscribe( (alumnosSnapshot: any) =>{
      this.alumnos = [];
      alumnosSnapshot.forEach((alumnoData:any) => {
          console.log(alumnoData.payload.doc.data());
          this.alumnos.push({
            id: alumnoData.payload.doc.id,
            data: alumnoData.payload.doc.data()
          })
      });
    } )
  }

}
