import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  listaUsuarios: any[] = [];

  constructor(private userService: UsuariosService) { }

  ngOnInit(): void {
    this.userService.getUsuarios().subscribe(resp => {
      resp.data.forEach((user: Usuario) => {
        this.listaUsuarios.push(user);
      });
      // El problema estaba en especificar en el servicio (observable) que se recibe un array de user...
    });

  }

}
