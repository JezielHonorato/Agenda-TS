import { Component } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { Contato } from '../models/contato';

@Component({
  selector: 'app-exibe-contato',
  templateUrl: './exibe-contato.component.html',
  styleUrl: './exibe-contato.component.css'
})
export class ExibeContatoComponent {
  contatos: Contato[]

  constructor(private agenda: AgendaService) {
    this.contatos = this.agenda.contatosList
  }
}
