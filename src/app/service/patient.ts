export interface Patient {
  $key: string;
  date_reception_demande: Date;
  num_dossier: string;
  nom_complet: string;
  adresse_mail: string;
  num_tel: string;
  pays: string;
  interventions: string;
  periode_souhaite: string;
  offre: string;
  date_emission: Date;
  devis: string;
  sejour: string;
  date_rappel1: Date;
  rappel1: string;
  date_rappel2: Date;
  rappel2: string;
  date_rappel3: Date;
  rappel3: string;
  etape: string;
  remarque_commercial: string;
}
