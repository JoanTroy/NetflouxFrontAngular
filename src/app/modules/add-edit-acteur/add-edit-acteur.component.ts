import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {ActeurService} from "../../services/acteur/acteur.service";
import {FormBuilder, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import {Acteur} from "../../interfaces/acteur";

@Component({
  selector: 'app-add-edit-acteur',
  templateUrl: './add-edit-acteur.component.html',
  styleUrl: './add-edit-acteur.component.css'
})
export class AddEditActeurComponent implements OnChanges {
  @Input() displayAddModal: boolean = true;
  @Input() selectedActeur: any = null;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();

  modalType: string = 'Ajouter';

  acteurForm = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    dateNaissance: ['', Validators.required],

  });

  constructor(
    private acteurService: ActeurService,
    private fb: FormBuilder,
    private messageService: MessageService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.selectedActeur) {
      this.acteurForm.patchValue(this.selectedActeur);
      this.modalType = 'Modifier';
    } else {
      this.acteurForm.reset();
      this.modalType = 'Ajouter';
    }
  }

  closeModal(): void {
    this.clickClose.emit(true);
    this.acteurForm.reset();
  }

  addEditActeur(): void {
      const dateNaiss = new Date(this.acteurForm.value.dateNaissance!);
    let newActeur;
    if (this.selectedActeur) {
       newActeur = {
        dateNaissance: dateNaiss.toISOString().split('T')[0],
        id: this.selectedActeur.id,
        nom: this.acteurForm.value.nom,
        prenom: this.acteurForm.value.prenom,
        type: "ACTEUR"
      };
    } else {
      newActeur = {
        dateNaissance: dateNaiss.toISOString().split('T')[0],
        nom: this.acteurForm.value.nom,
        prenom: this.acteurForm.value.prenom,
        type: "ACTEUR"
      };
    }


      this.acteurService.addEditActeur(newActeur, this.selectedActeur).subscribe(
        (response: Acteur): void => {
          this.clickAddEdit.emit(response);
          this.closeModal();
          const msg = !this.selectedActeur ? 'Acteur ajouter' : 'Acteur modifier';
          this.messageService.add({severity: 'success', summary: 'Succes', detail: msg});
        },
        (error): void => {
          this.messageService.add({severity: 'error', summary: 'Error', detail: error});
        },
      );


  }

}
