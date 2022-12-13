export interface Mascota {
  id: string;
  data: {
    nombre: string;
    especie: string;
    raza: string;
    edad: number;
    sexo: string;
    nombrePropietario: string;
  };
}
