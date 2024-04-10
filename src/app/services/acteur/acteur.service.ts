import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Acteur, ActeurRequest} from "../../interfaces/acteur";
import {catchError, Observable, of, take, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActeurService {

  chemin:string = "http://localhost:8080/streamzone-back-1.0-SNAPSHOT/api/v1";


  constructor(
    private http: HttpClient,
  ) { }


  //FIND ALL
  findAll(): Observable<Acteur[]> {

    return this.http.get<Acteur[]>(this.chemin+'/acteurs').pipe(
      tap(resp => this.log(resp)),
      take(1),
      catchError(error => this.handleError(error, []))
    )
  }

  //FIND ALL LAZYLOAD
  findAllLazy(request: ActeurRequest): Observable<Acteur[]> {
    const {first, rows, sortField, sortOrder, filter} = request

    let urlParams: string = `first=${first}&pageSize=${rows}`

    return this.http.get<Acteur[]>(`${this.chemin}/acteurs?${urlParams}`);
  }

  //Count
  countActeur(): Observable<any> {
    return this.http.post<any>(`${this.chemin}/acteurs/count`, null);
  }

  //ADD-EDIT -ALL IN ONE
  addEditActeur(postData: any, selectedActeur: any): Observable<Acteur> {
    const httpOption = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    if (!selectedActeur) {
      return this.http.post<Acteur>(`${this.chemin}/acteurs`, postData, httpOption);
    } else {
      return this.http.put<Acteur>(`${this.chemin}/acteurs/${selectedActeur.id}`, postData, httpOption);
    }
  }


  //FIND BY ID
  findByID(id: number): Observable<Acteur | undefined> {
    return this.http.get<Acteur>(this.chemin + `/acteurs/${id}`).pipe(
      tap(resp => this.log(resp)),
      catchError(error => this.handleError(error, []))
    );
  }

  //UPDATE
  update(acteur: Acteur): Observable<null> {
    const httpOption = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = `${this.chemin}/acteurs/${acteur.id}/`;

    return this.http.put(url, acteur, httpOption).pipe(
      tap(resp => this.log(resp)),
      take(1),
      //error value null normalement
      catchError(err => this.handleError(err, null))
    );
  }

  //DELETE BY ID
  deleteByID(acteurId: number) {
    return this.http.delete(this.chemin + `/acteurs/${acteurId}`);
  }

/*
.pipe(
    tap(resp => this.log(resp)),
  take(1),
  //error value null normalement
  catchError(err => this.handleError(err, null))
)
*/

  //CREATE
  create(acteur: Acteur): Observable<Acteur> {
    const httpOption = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<Acteur>(this.chemin + '/acteurs', acteur, httpOption).pipe(
      tap(resp => this.log(resp)),
      take(1),
      //error value null normalement
      catchError(err => this.handleError(err, null))
    );
  }


  private log(response: any) {
    console.table(response);
  }


  private handleError(error: any, errorValue: any) {
    console.error(error);

    if (error.status === 404)
      console.error('ERREUR 404: ressource non trouvée !');
    if (error.status === 406)
      console.error('ERREUR 406 non acceptable !');

    return of(errorValue);
  }

}
