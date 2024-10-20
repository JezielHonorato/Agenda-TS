import { Component } from '@angular/core';
import { Grupo, Contato } from './contato';
import { Agenda } from './agenda';

@Component({
  selector: 'app-adiciona-contato',
  templateUrl: './adiciona-contato.component.html',
  styleUrls: ['./adiciona-contato.component.css']
})

export class AdicionaContatoComponent {
  private agenda: Agenda;
  contatos: Contato[] = [];
  Grupo = Grupo;
  grupos: (keyof typeof Grupo)[];

  constructor() {
    this.agenda = new Agenda();
    this.grupos = Object.keys(Grupo) as (keyof typeof Grupo)[];
  }

  adicionar(nome: string, telefone: string, email: string, data: string, grupo: string): void {
    const grupoEnum = Grupo[grupo as keyof typeof Grupo];
    const pessoa = new Contato(nome, telefone, email, data, grupoEnum);
    
    if (this.agenda.adicionarContato(pessoa)) {
      this.contatos = this.agenda.contatosList;
    }
    console.log("Contato adicionado com sucesso");
  }
}
