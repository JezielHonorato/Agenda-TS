import { Injectable } from '@angular/core';
import { Grupo } from '../models/grupo';

@Injectable({
  providedIn: 'root'
})

export class ContatoService {
  private nome: string;
  private telefone: string;
  private email?: string;
  private aniversario?: Date;
  private grupo?: Grupo;

  constructor(
    nome: string,
    telefone: string,
    email?: string,
    data?: string,
    grupo?: Grupo
  ) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.aniversario = data ? new Date(data) : undefined;
    this.grupo = grupo;
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
}
