import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../services/contactos.service';
import { Contacto } from '../interfaces/contacto';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css'],
})
export class ContactosComponent implements OnInit {
  page = 1;
  contactos: Contacto[] = [];

  constructor(private contactSvc: ContactosService) {}

  ngOnInit(): void {
    this.cargaLista();
  }

  cargaLista() {
    this.contactSvc.getContactos(this.page).subscribe((resp) => {
      console.log(resp);
      this.contactos = resp.data;
      console.log(this.contactos);
    });
  }
}
