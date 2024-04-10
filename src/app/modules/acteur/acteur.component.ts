import {Component, OnInit} from '@angular/core';
import {Acteur, ActeurRequest} from "../../interfaces/acteur";
import {Subscription} from "rxjs";
import {ActeurService} from "../../services/acteur/acteur.service";
import {TableLazyLoadEvent} from "primeng/table";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-acteur',
  templateUrl: './acteur.component.html',
  styleUrl: './acteur.component.css'
})
export class ActeurComponent implements OnInit {

  acteurs: Acteur[] = [];

  globalFilter: string = '';
  request: ActeurRequest = {
    first: 0,
    rows: 10,
    sortField: '',
    sortOrder:1,
    filter: {
      nom:''
    }
  }

  totalRecords: number=0;

  //Attribut pour afficher la pop-up de création/édition d'acteur et passer l'acteur en cas d'édition
  displayAddEditModal: boolean = false;
  selectedActeur: any = null;

  //Attribut qui serve à stocker les .subscribe afin de .unsubscribe
  subscriptions: Subscription[] = [];
  pdtSubscription: Subscription = new  Subscription();


  constructor(
    private acteurService: ActeurService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) {}

  ngOnInit() {
    this.acteurService.countActeur().subscribe(
      (resp) => {
        this.totalRecords = resp;
      },
    )
  }

  /**
   * Méthode qui appelle le service Acteur pour récupérer la liste partielle en fonction des param de request.
   * @private
   */
  private getActeurs(): void {
    this.acteurService.findAllLazy(this.request).subscribe(
      (resp:Acteur[]) => {
        this.acteurs = resp;
      },
    )
  }


  loadActeurs($event: TableLazyLoadEvent): void {
    console.log($event);

    this.request.first = $event.first || 0;

    this.getActeurs();
  }

  /**
   * Méthode qui affiche la pop-up de création d'un Acteur.
   */
  showAddModal() {
    this.displayAddEditModal = true;
    this.selectedActeur = null;
  }

  /**
   * Méthode qui affiche la pop-up d'édition d'un Acteur.
   */
  showEditModal(acteur: Acteur) {
    this.displayAddEditModal = true;
    this.selectedActeur = acteur;
  }

  hideAddModal(isClosed: boolean) {
    this.displayAddEditModal = !isClosed;
  }

  save() {
    this.getActeurs();
  }

  /**
   * Methode pour supprimer un acteur en passant par une boite de confirmation.
   * @param acteur
   */
  deleteActeur(acteur: Acteur): void {
    this.confirmationService.confirm({
      message: `Êtes vous sure de vouloir supprimer ${acteur.prenom} ${acteur.nom} ?`,
      header: 'Confirmer la suppression',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.acteurService.deleteByID(acteur.id).subscribe(
          (response) => {
            this.getActeurs();
            this.messageService.add({severity: 'success', summary: 'Success', detail: 'Acteurs supprimé !'});
          },
          (error) => {
            this.messageService.add({severity: 'error', summary: 'Error', detail: error});
          },
        )
      },
    })
  }
}
