import {Component, OnInit} from '@angular/core';
import {Film} from "../../interfaces/film";
import {FilmService} from "../../services/film/film.service";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrl: './film.component.css'
})
export class FilmComponent implements OnInit{

  films: Film[] = [];
  responsiveOptions: any[] | undefined;

  constructor(
    private filmService: FilmService,
  ) {}

  ngOnInit() {
    this.filmService.findAll().subscribe(
      (response) => {
        this.films = response;
        console.table(this.films);
      },
    );

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }



}
