import { Usuario } from './usuario';

export class User implements Usuario {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;

  constructor(user: Usuario) {
    this.id = user.id;
    this.avatar = user.avatar;
    this.first_name = user.first_name;
    this.email = user.email;
    this.last_name = user.last_name;
  }
}
