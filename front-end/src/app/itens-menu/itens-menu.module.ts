import { TransparenciaComponent } from './transparencia/transparencia.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';

import { DoeAgoraComponent } from './doe-agora/doe-agora.component';
import { ContatoComponent } from './contato/contato.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalidadesComponent } from './modalidades/modalidades.component';
import { NoticiasComponent } from './noticias/noticias.component';

@NgModule({
  declarations: [
    ContatoComponent,
    DoeAgoraComponent,
    ModalidadesComponent,
    NoticiasComponent,
    QuemSomosComponent,
    TransparenciaComponent,
  ],
  imports: [CommonModule],
  exports: [
    ContatoComponent,
    DoeAgoraComponent,
    ModalidadesComponent,
    NoticiasComponent,
    QuemSomosComponent,
    TransparenciaComponent,
  ]
})
export class ItensMenuModule {}
