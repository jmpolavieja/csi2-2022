import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Contacto } from '../interfaces/contacto';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactosService {
  urlReqres = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  // 00. Lectura de contact (todos/detalle)
  getContactos(page: number): Observable<any> {
    return this.http
      .get<any>(`${this.urlReqres}?page=${page}`)
      .pipe(catchError(this.handleError('getContactos')));
  }

  getDetail(id: number): Observable<any> {
    return this.http
      .get<any>(`${this.urlReqres}/${id}`)
      .pipe(catchError(this.handleError('getDetail')));
  }

  // 0. Manejo de errores
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  // Implementar resto de métodos para CRUD
  // 1. Create Contact
  newContact(contact: Contacto): Observable<Contacto> {
    //console.log("desde newContact: " + contact.first_name);
    return this.http
      .post<Contacto>(this.urlReqres, contact)
      .pipe(catchError(this.handleError('newContact', contact)));
  }

  // 2. Update contact
  updateContact(id: number, contact: Contacto): Observable<Contacto> {
    return this.http
      .put<Contacto>(`${this.urlReqres}/${id}`, contact)
      .pipe(catchError(this.handleError('updateContacto', contact)));
  }

  // 3. Delete Contact
  deleteContact(id: number): Observable<Contacto> {
    return this.http
      .delete<Contacto>(`${this.urlReqres}/${id}`)
      .pipe(catchError(this.handleError<Contacto>('deleteContacto')));
  }
}
