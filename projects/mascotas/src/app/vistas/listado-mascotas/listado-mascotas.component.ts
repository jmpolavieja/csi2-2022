import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../modelos/mascota';
import { MascotasService } from '../../modelos/mascotas.service';
import { ActivatedRoute } from '@angular/router';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-listado-mascotas',
  templateUrl: './listado-mascotas.component.html',
  styleUrls: ['./listado-mascotas.component.css'],
})
export class ListadoMascotasComponent implements OnInit {
  listaMascotas: Mascota[] = [];
  selectedMascota?: Mascota;

  constructor(
    private mascotasService: MascotasService,
    private ruta: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ruta.params.subscribe((params: any) => {
      if (params['especie']) {
        // LLamo a getEspecie
        this.getEspecie(params['especie']);
      } else {
        this.getAll();
      }
    });
  }

  getEspecie(especie: string) {
    this.mascotasService.getEspecie(especie).subscribe((resp: any) => {
      this.cargaLista(resp);
    });
  }

  getAll() {
    this.mascotasService.getAll().subscribe((resp: any) => {
      this.cargaLista(resp);
    });
  }

  cargaLista(resp: any) {
    this.listaMascotas = [];
    resp.forEach((mascota: any) => {
      this.listaMascotas.push({
        id: mascota.payload.doc.id,
        data: mascota.payload.doc.data(),
      });
    });
  }


  selectMascota(mascota: Mascota) {
    this.selectedMascota = mascota;
  }
}
