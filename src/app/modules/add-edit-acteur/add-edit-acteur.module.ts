import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditActeurComponent } from './add-edit-acteur.component';
import {DialogModule} from "primeng/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "primeng/api";
import {ButtonModule} from "primeng/button";
import {CalendarModule} from "primeng/calendar";



@NgModule({
  declarations: [
    AddEditActeurComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    ButtonModule,
    DialogModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    CalendarModule
  ],
  exports: [
    AddEditActeurComponent,
  ]
})
export class AddEditActeurModule { }
