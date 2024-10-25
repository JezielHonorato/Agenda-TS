import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdicionaContatoComponent } from './adiciona-contato/adiciona-contato.component';
import { ExibeContatoComponent } from './exibe-contato/exibe-contato.component';
import { ExibeFavoritosComponent } from './exibe-favoritos/exibe-favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    AdicionaContatoComponent,
    ExibeContatoComponent,
    ExibeFavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
