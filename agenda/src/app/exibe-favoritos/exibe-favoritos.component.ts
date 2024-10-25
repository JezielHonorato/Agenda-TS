import { Component } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { Contato } from '../models/contato';

@Component({
  selector: 'app-exibe-favoritos',
  templateUrl: './exibe-favoritos.component.html',
  styleUrl: './exibe-favoritos.component.css',
})
export class ExibeFavoritosComponent {
  contatos: Contato[];

  constructor(private agenda: AgendaService) {
    this.contatos = this.agenda.contatosList;
  }

  favoritar(contato: Contato, favorito: boolean): void {
    contato.setFavorito(favorito);
    console.log("alterou o favo")
  }
  
  getContatosFavoritos(): Contato[] {
    return this.contatos.filter(contato => contato.getFavorito());
  }
}
