import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SolicitarDatosComponent } from './solicitar-datos/solicitar-datos.component';
import { ListarDatosComponent } from './listar-datos/listar-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    SolicitarDatosComponent,
    ListarDatosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
