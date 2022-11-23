import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css'],
})
export class FormUsuarioComponent implements OnInit {
  idSelected: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.fragment.subscribe(fragment => {
      this.idSelected = fragment;
    });
    let parametro = this.route.snapshot.paramMap.get('id');
    console.log(parametro);
    //this.idSelected = this.route.snapshot.fragment;
    // tengo en id el framento del menú y puedo buscar en este caso el usuario concreto para mostrarlo
    console.log(this.idSelected);}


}
