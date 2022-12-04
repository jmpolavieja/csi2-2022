import { Component, OnInit } from '@angular/core';
import { ColoresService } from '../../services/colores.service';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {

  data: any[] = [];

  constructor(private coloresSvc: ColoresService) { }

  ngOnInit(): void {
    this.coloresSvc.getColores(1).subscribe(
      resp => {
        this.data = resp.data;
      }
    )
  }

}
