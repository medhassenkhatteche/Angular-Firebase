import { Injectable } from '@angular/core';
import { Patient} from './patient';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class PatientService {

  patientsRef: AngularFireList<any>;
  patientRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  /* Ajout patient */
  AddPatient(patient: Patient) {
    this.patientsRef.push({
      date_reception_demande: patient.date_reception_demande,
      num_dossier: patient.num_dossier,
      nom_complet: patient.nom_complet,
      adresse_mail: patient.adresse_mail,
      num_tel: patient.num_tel,
      pays: patient.pays,
      interventions: patient.interventions,
      periode_souhaite: patient.periode_souhaite,
      offre: patient.offre,
      date_emission: patient.date_emission,
      devis: patient.devis,
      sejour: patient.sejour,
      date_rappel1: patient.date_rappel1,
      rappel1: patient.rappel1,
      date_rappel2: patient.date_rappel2,
      rappel2: patient.rappel2,
      date_rappel3: patient.date_rappel3,
      rappel3: patient.rappel3,
      etape: patient.etape,
      remarque_commercial: patient.remarque_commercial
    })
      .catch(error => {
        this.errorMgmt(error);
      });
  }

  // Error management
  private errorMgmt(error) {
    console.log(error);
  }

  /* Afficher patient */
  GetPatient(id: string) {
    this.patientRef = this.db.object('liste-patient/' + id);
    return this.patientRef;
  }

  /* Afficher la liste des patients */
  GetPatientList() {
    this.patientsRef = this.db.list('liste-patient');
    return this.patientsRef;
  }

  /* Modifier un patient */
  UpdatePatient(id, patient: Patient) {
    this.patientRef.update({
      date_reception_demande: patient.date_reception_demande,
      num_dossier: patient.num_dossier,
      nom_complet: patient.nom_complet,
      adresse_mail: patient.adresse_mail,
      num_tel: patient.num_tel,
      pays: patient.pays,
      interventions: patient.interventions,
      periode_souhaite: patient.periode_souhaite,
      offre: patient.offre,
      date_emission: patient.date_emission,
      devis: patient.devis,
      sejour: patient.sejour,
      date_rappel1: patient.date_rappel1,
      rappel1: patient.rappel1,
      date_rappel2: patient.date_rappel2,
      rappel2: patient.rappel2,
      date_rappel3: patient.date_rappel3,
      rappel3: patient.rappel3,
      etape: patient.etape,
      remarque_commercial: patient.remarque_commercial
    })
      .catch(error => {
        this.errorMgmt(error);
      });
  }

  /* Supprimer un patient */
  DeletePatient(id: string) {
    this.patientRef = this.db.object('liste-patient/' + id);
    this.patientRef.remove()
      .catch(error => {
        this.errorMgmt(error);
      });
    console.log('patient supprimé!');
  }
}
