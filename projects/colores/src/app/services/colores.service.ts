import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColoresService {

  constructor(private http: HttpClient) { }

  getColores(page: number): Observable<any>{
    return this.http.get('https://reqres.in/api/colores?page=' + page);
  }
}
