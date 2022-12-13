import { Component, Input, OnInit } from '@angular/core';
import { Mascota } from '../../modelos/mascota';

@Component({
  selector: 'app-detalle-mascotas',
  templateUrl: './detalle-mascotas.component.html',
  styleUrls: ['./detalle-mascotas.component.css']
})
export class DetalleMascotasComponent implements OnInit {

  @Input() mascota?: Mascota;

  constructor() { }

  ngOnInit(): void {
  }

}
