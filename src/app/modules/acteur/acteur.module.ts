import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActeurComponent } from './acteur.component';
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {HttpClientModule} from "@angular/common/http";
import {AddEditActeurModule} from "../add-edit-acteur/add-edit-acteur.module";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ToastModule} from "primeng/toast";
import {FormsModule} from "@angular/forms";
import {ConfirmationService, MessageService} from "primeng/api";
import {RouterModule, Routes} from "@angular/router";

const acteurRoutes: Routes = [
  {path: 'acteurs', component: ActeurComponent},
]

@NgModule({
  declarations: [
    ActeurComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    AddEditActeurModule,
    ConfirmDialogModule,
    ToastModule,
    FormsModule,
    RouterModule.forChild(acteurRoutes)
  ],
  exports: [
    ActeurComponent
  ],
  providers: [
    MessageService,
    ConfirmationService
  ]
})
export class ActeurModule { }
