export interface Acteur {
  id: number;
  nom: string;
  prenom: string;
  dateNaissance: Date;
  type: string;
  image: string;
}

export interface ActeurRequest {
  first: number;
  rows: number;
  sortField: string | string[];
  sortOrder: number;
  filter?: {
    nom: string;
  }
}
