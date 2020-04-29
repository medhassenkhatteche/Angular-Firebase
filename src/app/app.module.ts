import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './material.module';
import { MatSortModule} from '@angular/material/sort';

/* Firebase */
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

/* Reactive form services in Angular 7 */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjoutPatientComponent } from './patients/ajout-patient/ajout-patient.component';
import { ModifPatientComponent } from './patients/modif-patient/modif-patient.component';
import { ListePatientComponent } from './patients/liste-patient/liste-patient.component';
import {ListPatientRappelComponent} from "./patients/list-patient-rappel/list-patient-rappel.component";
import {ListePatientClassesComponent} from "./patients/liste-patient-classes/liste-patient-classes.component";
import {ListePatientConfirmesComponent} from "./patients/liste-patient-confirmes/liste-patient-confirmes.component";
import {ListePatientPreconfirmesComponent} from "./patients/liste-patient-preconfirmes/liste-patient-preconfirmes.component";
import {ListePatientDevdefComponent} from "./patients/liste-patient-devdef/liste-patient-devdef.component";
import {ListePatientRecphoComponent} from "./patients/liste-patient-recpho/liste-patient-recpho.component";
import {ListePatientRecdeminiComponent} from "./patients/liste-patient-recdemini/liste-patient-recdemini.component";

/* Angular CRUD services */
import {PatientService} from './service/patient.service';

/*Librairie pour l'export des données en fichier CSV*/
import {MatTableModule} from '@angular/material/table';

import { DatePipe } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    AjoutPatientComponent,
    ModifPatientComponent,
    ListePatientComponent,
    ListPatientRappelComponent,
    ListePatientClassesComponent,
    ListePatientConfirmesComponent,
    ListePatientPreconfirmesComponent,
    ListePatientDevdefComponent,
    ListePatientRecphoComponent,
    ListePatientRecdeminiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [PatientService, DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
