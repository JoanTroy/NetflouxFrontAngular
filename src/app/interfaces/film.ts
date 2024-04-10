export interface Film {
  id: number;
  titre: string;
  description: string;
  dateSortie: Date;
  duree: number;
  nbVisionnage: number
  realisateur: number
  image: string;
  acteurs: number[];
}

export interface FilmRequest {
  first: number;
  rows: number;
  sortField: string | string[];
  sortOrder: number;
  filter?: {
    titre: string;
  }
}
