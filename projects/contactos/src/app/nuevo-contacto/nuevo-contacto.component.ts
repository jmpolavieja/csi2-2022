import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../services/contactos.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Contacto } from '../interfaces/contacto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.css']
})
export class NuevoContactoComponent implements OnInit {

  contactForm = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    avatar: [''],
    email: ['', Validators.required],
    id: [0]
  })
  newContact?: any;

  constructor(
    private contactoSvc: ContactosService,
    private fb: FormBuilder,
    private location: Location,
    private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.ruta.snapshot.paramMap.get('id')) {
      console.log('Hay parámetro');
      // Pasamos a editar
      this.ruta.paramMap.subscribe( (params => {
        let id = Number(params.get('id'));
        this.contactoSvc.getDetail(id).subscribe((resp: any) =>{
          this.contactForm.patchValue(resp.data)
        });
      }));
    } else {
      console.log('NO hay parámetro');
    }
  }

  submit(): void {
    this.newContact = this.contactForm.value;
    this.contactoSvc.newContact(this.newContact).subscribe( (resp: any) => {
      console.log(resp);
      alert(`El contacto ha sido guardado con id ${resp.id}`);
      this.goBack();
    });
  }



  goBack(): void {
    this.location.back();
  }
}
