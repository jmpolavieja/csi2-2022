import { Component, OnInit } from '@angular/core';
import { RecursosService } from '../services/recursos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  colores: any[] = [];

  constructor(private colorService: RecursosService) { }

  ngOnInit(): void {
    this.colorService.getRecursos().subscribe( (resp) => {
      this.colores = resp.data;
      console.log(resp.data);
    })
  }

}
