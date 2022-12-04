import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Alumno } from './alumno.interfaz';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  // Crear un nuevo alumno
  public createAlumno(alumno: Alumno) {}

  // obtener un alumno


  // Obtener todos los alumnos


  // Modificar un alumno


  // Eliminar un alumno
}
