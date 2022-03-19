import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItensMenuModule } from './itens-menu/itens-menu.module';
import { NavegavaoModule } from './navegacao/navegavao.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ItensMenuModule,
    NavegavaoModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
