import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  conexion: any = this.firebase.collection('mascotas');

  constructor(private firebase: AngularFirestore) { }

  getAll() {
    return this.conexion.snapshotChanges();
  }

  getEspecie(especie: string) {
    return this.firebase.collection('mascotas',
           ref => ref.where('especie','==', especie))
           .snapshotChanges();
  }

  getMascota(documentId: string) {
    return this.conexion.doc(documentId).snapshotChanges();
  }

  createMascota(data: any) {
    return this.conexion.add(data);
  }

  updateMascota(documentId: string, data: any) {
    return this.conexion.doc(documentId).update(data);
  }

  deleteMascota(documentId: string){
    return this.conexion.doc(documentId).delete();
  }

}
