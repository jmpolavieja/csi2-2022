import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Alumno } from './alumno.interfaz';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private miColeccion = 'alumnos';

  constructor(private firebase: AngularFirestore) { }

  // Vamos a hacer el CRUD de los alumnos

  // Leer un alumno
  getAlumno(id: string) {
    return this.firebase.collection(this.miColeccion).doc(id).snapshotChanges();
  }

  getCurso(curso: string) {
    return this.firebase.collection(this.miColeccion, ref => ref.where('curso','==',curso)).snapshotChanges();
  }

  // Leer todos los alumnos
  getAll() {
    return this.firebase.collection(this.miColeccion).snapshotChanges();
  }

  // Nuevo Alumno
  newAlumno(alumno: Alumno) {
    return this.firebase.collection(this.miColeccion).add(alumno);
  }
  // Actualiza alumno
  updateAlumno(documentId: string, alumno: Alumno) {
    return this.firebase.collection(this.miColeccion).doc(documentId).update(alumno);
  }
  // Borra alumno
  delete(documentId: string) {
    return this.firebase.collection(this.miColeccion).doc(documentId).delete();
  }
}
