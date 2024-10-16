import { Component } from '@angular/core';
import { Tipo, Contato } from './contato';
import { Agenda } from './agenda';

@Component({
  selector: 'app-adiciona-contato',
  templateUrl: './adiciona-contato.component.html',
  styleUrl: './adiciona-contato.component.css'
})
export class AdicionaContatoComponent {
  private agenda: Agenda;

  constructor() {
    this.agenda = new Agenda();
  }

  adicionar(nome: string, telefone: string, email: string, data: string, tipo: string): void {
    const tipoEnum = Tipo[tipo as keyof typeof Tipo];
    const pessoa = new Contato(nome, telefone, email, data, tipoEnum);
    this.agenda.adicionarContato(pessoa);
    this.agenda.listarContatos();
    console.log("foiii")
  }
}
