import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../services/contactos.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Contacto } from '../interfaces/contacto';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  contact?: Contacto;
  newContact = false;
  resp: any;

  constructor(
    private contactSvc: ContactosService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {

        let id = Number(params.get('id'));
        this.contactSvc.getDetail(id).subscribe((resp: any) => {
          // console.log(resp);
          this.contact = resp.data;
          this.newContact = false;
        });
    });
  }

  addContacto() {
    this.contactSvc.newContact(this.contact!).subscribe((resp) => {
      return this.resp.push(resp);
    });
  }

  updateContacto(id: number) {
    this.contactSvc.updateContact(id, this.contact!).subscribe((resp) => {
      return this.resp.push(resp);
    });
  }

  delete(id: number) {
    this.contactSvc.deleteContact(id).subscribe((resp) => {
      console.log(resp);
      this.goBack();
    })
  }

  goBack(): void {
    this.location.back();
  }
}
