import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    MenuComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    MenuComponent
  ]
})
export class NavegavaoModule { }
