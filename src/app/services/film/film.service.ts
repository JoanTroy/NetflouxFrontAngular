import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Film} from "../../interfaces/film";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  chemin: string = "http://localhost:8080/streamzone-back-1.0-SNAPSHOT/api/v1";

  constructor(
    private http: HttpClient,
  ) {
  }

  //FIND ALL
  findAll(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.chemin}/films`);
  }

  //COUNT
  countFilm(): Observable<any> {
    return this.http.get<any>(`${this.chemin}/films/count`);
  }

}
