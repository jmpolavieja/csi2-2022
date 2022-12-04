import { Injectable } from '@angular/core';
import { collectionData, docData, Firestore } from '@angular/fire/firestore';
import {
  CollectionReference,
  DocumentData,
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from '@firebase/firestore';
import { Alumno } from '../interfaces/alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  // Variable privada alumnosCollection, con la referencia a la instancia de la colección de Alumnos del firestore
  private alumnosCollection: CollectionReference<DocumentData>;

  // Inyectamos firestore
  constructor(private firestore: Firestore) {
    this.alumnosCollection = collection(this.firestore, 'alumnos');
  }

  getAll() {
    return collectionData(this.alumnosCollection, {
      idField: 'id',
    }) as Observable<Alumno[]>;
  }

  get(id: string) {
    const alumnoDocumentReference = doc(this.firestore, `alumnos/${id}`);
    return docData(alumnoDocumentReference, { idField: 'id' });
  }

  create(alumno: Alumno) {
    return addDoc(this.alumnosCollection, alumno);
  }

  update(alumno: Alumno) {
    const alumnoDocumentReference = doc(this.firestore, `alumnos/${alumno.id}`);
    return updateDoc(alumnoDocumentReference, { ...alumno });
  }

  delete(id: string) {
    const alumnoDocumentReference = doc(this.firestore, `alumnos/${id}`);
    return deleteDoc(alumnoDocumentReference);
  }
}
