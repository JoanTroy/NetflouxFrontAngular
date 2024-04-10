import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './film.component';
import {RouterModule, Routes} from "@angular/router";
import {CarouselModule} from "primeng/carousel";
import {ButtonModule} from "primeng/button";

const filmRoutes: Routes = [

]

@NgModule({
  declarations: [
    FilmComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(filmRoutes),
    CarouselModule,
    ButtonModule
  ],
  exports: [
    FilmComponent,
  ]
})
export class FilmModule { }
