import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mi-form',
  templateUrl: './mi-form.component.html',
  styleUrls: ['./mi-form.component.css']
})
export class MiFormComponent implements OnInit {

  miControldeFormulario = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.establecerColor('Red');
  }

  establecerColor(color: string): void {
    this.miControldeFormulario.setValue(color);
  }
}
