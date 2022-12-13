import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MascotasService } from '../../modelos/mascotas.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-formulario-mascotas',
  templateUrl: './formulario-mascotas.component.html',
  styleUrls: ['./formulario-mascotas.component.css'],
})
export class FormularioMascotasComponent implements OnInit {
  datosMascota = this.fb.group({
    nombre: ['', Validators.required],
    especie: ['', Validators.required],
    raza: ['', Validators.required],
    edad: [0, Validators.required],
    sexo: ['', Validators.required],
    nombrePropietario: ['', Validators.required],
  });
  nueva: boolean = false;
  documentId: any;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private mascotasService: MascotasService,
    private ruta: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.ruta.params.subscribe( params => {
      if(params['id']){
        this.documentId = String(params['id']);
        this.nueva = false;
        console.log('editar');
        // mostrar la mascota en el formulario
        this.mascotasService.getMascota(this.documentId).subscribe(
          (resp: any) => {
            this.datosMascota.setValue(resp.payload.data());
          }
        )
      }else{
        console.log('nueva');
        this.nueva=true;
      }
    })
  }

  guardar() {
    if(this.nueva){
      // guardar datos con crearMascota
      this.mascotasService.createMascota(this.datosMascota.value).then(
        () => {
          alert('Mascota creada, enhorabuena');
          this.cancel();
        }, (error: any) => {
          alert("Error: " + error);
        }
      )
    }else{
      // llamar o invocar actualizar mascota
      this.mascotasService.updateMascota(this.documentId, this.datosMascota.value).then(
        () => {
          alert('Mascota actualizada');
          this.cancel();
        },
        (error: any) => {
          alert('Error: ' + error);
        }
      )
    }
  }

  cancel(){
    this.location.back();
  }
}
