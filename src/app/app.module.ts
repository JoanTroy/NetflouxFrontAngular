import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ActeurModule} from "./modules/acteur/acteur.module";
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import { IndexComponent } from './modules/index/index.component';
import {FilmModule} from "./modules/film/film.module";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActeurModule,
    MenubarModule,
    ButtonModule,
    FilmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
