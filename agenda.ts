import { Tipo, Contato } from "./contato";

class Agenda {
  private __contatos: Contato[];

  constructor(...contato: Contato[]) {
    this.__contatos = contato;
  }

  set contato(contato: Contato) {
    this.__contatos.push(contato);
  }
  get contatos() {
    return this.__contatos;
  }

  pesquisarContatoNome(nome: string): Contato[] {
    const listaContatos: Contato[] = [];
    for (let count = 0; count < this.__contatos.length; count++) {
      if (nome && this.__contatos[count].nome.toLowerCase().includes(nome.toLowerCase())) {
        listaContatos.push(this.__contatos[count]);
      }
    }
    return listaContatos
  }

  pesquisarContatoTelefone(telefone: string): Contato | false {
    for (let count = 0; count < this.__contatos.length; count++) {
      if (this.__contatos[count].telefone == telefone) {
        return this.__contatos[count];
      }
    }
    return false
  }

  pesquisarContatoEmail(email: string): Contato | false {
    for (let count = 0; count < this.__contatos.length; count++) {
      if (this.__contatos[count].email == email) {
        return this.__contatos[count];
      }
    }
    return false;
  }
}

let contatoJeziel = new Contato(
  "Jeziel Honorato",
  "84991088201",
  "jeziel.h@escolar.ifrn.edu.br",
  "2006-06-15",
  Tipo.AMIGO
);

let agenda = new Agenda(
  contatoJeziel,
  contatoJeziel,
  contatoJeziel,
  contatoJeziel
);

console.log(agenda);