import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AjoutPatientComponent} from './patients/ajout-patient/ajout-patient.component';
import {ModifPatientComponent} from './patients/modif-patient/modif-patient.component';
import {ListePatientComponent} from './patients/liste-patient/liste-patient.component';
import {ListPatientRappelComponent} from "./patients/list-patient-rappel/list-patient-rappel.component";
import {ListePatientClassesComponent} from "./patients/liste-patient-classes/liste-patient-classes.component";
import {ListePatientConfirmesComponent} from "./patients/liste-patient-confirmes/liste-patient-confirmes.component";
import {ListePatientPreconfirmesComponent} from "./patients/liste-patient-preconfirmes/liste-patient-preconfirmes.component";
import {ListePatientDevdefComponent} from "./patients/liste-patient-devdef/liste-patient-devdef.component";
import {ListePatientRecphoComponent} from "./patients/liste-patient-recpho/liste-patient-recpho.component";
import {ListePatientRecdeminiComponent} from "./patients/liste-patient-recdemini/liste-patient-recdemini.component";


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'liste-patient' },
  { path: 'ajout-patient', component: AjoutPatientComponent },
  { path: 'modif-patient/:id', component: ModifPatientComponent },
  { path: 'liste-patient', component: ListePatientComponent },
  { path: 'liste-patient-rappel', component: ListPatientRappelComponent },
  { path: 'liste-patient-classes', component: ListePatientClassesComponent },
  { path: 'liste-patient-confirmes', component: ListePatientConfirmesComponent },
  { path: 'liste-patient-preconfirmes', component: ListePatientPreconfirmesComponent },
  { path: 'liste-patient-devdef', component: ListePatientDevdefComponent },
  { path: 'liste-patient-recpho', component: ListePatientRecphoComponent },
  { path: 'liste-patient-recdemini', component: ListePatientRecdeminiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
