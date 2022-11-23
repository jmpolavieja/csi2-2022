import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../interfaces/usuario';

export interface Link { title: string, fragment: string};
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  links: Link[] = []
  constructor(public route: ActivatedRoute,private userSvc: UsuariosService) { }

  ngOnInit(): void {
    this.userSvc.getUsuarios().subscribe( resp => {
      resp.data.forEach((user: Usuario) => {
        let link = { title: user.first_name + " " + user.last_name, fragment: String(user.id)};
        this.links.push(link);
      });
    })
  }

}
