import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-valores-color',
  templateUrl: './valores-color.component.html',
  styleUrls: ['./valores-color.component.css'],
})
export class ValoresColorComponent implements OnInit {
  miBackground: string;
  miColor: string;
  oscuro = {
    background: '#0d6efd',
    color: '#ffffff',
  };
  claro = {
    background: '#f8f9fa',
    color: '#dc3545',
  };

  constructor() {
    this.miBackground = this.claro.background;
    this.miColor = this.claro.color;
  }

  ngOnInit(): void {}

  setModo(modo: string): void {
    switch (modo) {
      case 'oscuro':
        this.miBackground = this.oscuro.background;
        this.miColor = this.oscuro.color;
        break;
      case 'claro':
        this.miBackground = this.claro.background;
        this.miColor = this.claro.color;
        break;
      default:
        break;
    }
  }
}
