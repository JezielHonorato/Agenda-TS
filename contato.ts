export enum Tipo {
  AMIGO = "Amigos",
  FAMILIA = "Familiares",
  ESCOLA = "Colegas da escola",
  IGREJA = "Membros da igreja",
  TRABALHO = "Colegas de Trabalho",
}

export class Contato {
  private __nome: string;
  private __telefone: string;
  private __email: string | undefined;
  private __aniversario: Date | undefined;
  private __tipo: Tipo | undefined;

  constructor(nome: string, telefone: string, email: string | undefined = undefined, data: string | undefined = undefined, tipo: Tipo | undefined = undefined) {
    this.__nome = nome;
    this.__telefone = telefone;
    this.__email = email;
    this.__aniversario = this.aniversario;
    this.__tipo = tipo;
  }

  set nome(nome: string) {
    this.__nome = nome;
  }
  set telefone(telefone: string) {
    this.__telefone = telefone;
  }
  set email(email: string) {
    this.__email = email;
  }
  set aniversario(data: string) {
    this.__aniversario = new Date(data);
  }
  set tipo(tipo: Tipo) {
    this.__tipo = tipo;
  }
  get nome(): string {
    return this.__nome;
  }
  get telefone(): string {
    return this.__telefone;
  }
  get email(): string | undefined{
    return this.__email;
  }
  get aniversario(): Date | undefined{
    return this.__aniversario;
  }
  get tipo(): Tipo | undefined {
    return this.__tipo;
  }
}
