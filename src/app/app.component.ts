import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  itemsMenu: MenuItem[] | undefined;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.itemsMenu = [
      {
        label: 'Acceuil',
        icon: ' pi pi-home',
        url: '/index'
      },
      {
        label: 'Acteurs',
        icon: 'pi pi-fw pi-user',

        url: '/acteurs'
      }
    ]
  }

  logout() {

  }

  goToIndex() {
    this.router.navigate(['index']);
  }
}
