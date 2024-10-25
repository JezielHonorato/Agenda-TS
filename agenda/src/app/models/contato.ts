import { Grupo } from '../models/grupo';

export class Contato {
  private nome: string;
  private telefone: string;
  private email?: string;
  private aniversario?: Date;
  private grupo?: Grupo;
  private favorito: boolean;

  constructor(
    nome: string,
    telefone: string,
    email?: string,
    data?: string,
    grupo?: Grupo,
    favorito = false
  ) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.aniversario = data ? new Date(data) : undefined;
    this.grupo = grupo;
    this.favorito = favorito;
  }

  setNome(nome: string): void {
    this.nome = nome;
  }

  setTelefone(telefone: string): void {
    this.telefone = telefone;
  }

  setEmail(email?: string): void {
    this.email = email;
  }

  setAniversario(data: string): void {
    this.aniversario = new Date(data);
  }

  setGrupo(grupo?: Grupo): void {
    this.grupo = grupo;
  }

  setFavorito(favorito: boolean): void {
    this.favorito = favorito;
  }

  getNome(): string {
    return this.nome;
  }

  getTelefone(): string {
    return this.telefone;
  }

  getEmail(): string | undefined {
    return this.email;
  }

  getAniversario(): Date | undefined {
    return this.aniversario;
  }

  getGrupo(): Grupo | undefined {
    return this.grupo;
  }

  getFavorito(): boolean {
    return this.favorito;
  }
}
