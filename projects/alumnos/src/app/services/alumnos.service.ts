import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Alumno } from '../interfaces/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private firestore: AngularFirestore) { }

  //Crea un nuevo alumno
  public createAlumno(data: Alumno) {
    return this.firestore.collection('alumnos').add(data);
  }

  // Obtiene un alumno
  public getAlumno(documentId: string) {
    return this.firestore.collection('alumnos').doc(documentId)
        .snapshotChanges();
  }

  // Obtiene todos los alumnos
  public getAlumnos() {
    return this.firestore.collection('alumnos').snapshotChanges();
  }

  // Actualiza un alumno
  public updateAlumno(documentId: string, data: any) {
    return this.firestore.collection('alumnos').doc(documentId).set(data);
  }

  public deleteAlumno(documentId: string) {
    return this.firestore.collection('alumnos')
    .doc(documentId).delete();
  }
}
