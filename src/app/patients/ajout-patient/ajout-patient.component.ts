import { Component, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {FormGroup} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {PatientService} from '../../service/patient.service';

import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl} from '@angular/forms';
import {FormGroupDirective} from '@angular/forms';
import {NgForm} from '@angular/forms';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-ajout-patient',
  templateUrl: './ajout-patient.component.html',
  styleUrls: ['./ajout-patient.component.scss']
})
export class AjoutPatientComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList;
  @ViewChild('resetPatientForm') myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  selectedBindingType: string;
  patientForm: FormGroup;
  BindingType: any = ['Vol rembourse', 'Accompagnant gratuit'];

  selectedEtapeType: string;
  EtapeType: any = ['Réception de demande initiale', 'Réception des photos', 'Envoie du devis définitif', 'Préconfirmation (date fixée)', 'Confirmation', 'Dossier classé'];

  /*Date par défaut de réception de demande et d'émission*/
  currentDate = new Date();
  today_value = this.currentDate.toISOString().substring(0,10);

  /*Date par défaut du premier rappel*/
  Date_rap1 = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() , this.currentDate.getDate() + 1, this.currentDate.getHours());
  Date_rap1_value = this.Date_rap1.toISOString().substring(0,10);

  /*Date par défaut du deuxieme rappel*/
  Date_rap2 = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() , this.currentDate.getDate() + 4, this.currentDate.getHours());
  Date_rap2_value = this.Date_rap2.toISOString().substring(0,10);

  /*Date par défaut du troisieme rappel*/
  Date_rap3 = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() , this.currentDate.getDate() + 8, this.currentDate.getHours());
  Date_rap3_value = this.Date_rap3.toISOString().substring(0,10);

  constructor(public fb: FormBuilder,
              private patientApi: PatientService) { }

  ngOnInit(): void {
    this.patientApi.GetPatientList();
    this.submitPatientForm();
  }

  /* Reactive patient form */
  submitPatientForm() {
    this.patientForm = this.fb.group({
      date_reception_demande: [this.today_value],
      num_dossier: [''],
      nom_complet: ['', [Validators.required]],
      adresse_mail: ['', [Validators.required]],
      num_tel: [''],
      pays: ['France'],
      interventions: ['', [Validators.required]],
      periode_souhaite: [''],
      offre: ['', [Validators.required]],
      date_emission: [this.today_value],
      devis: [''],
      sejour: [''],
      date_rappel1: [this.Date_rap1_value],
      rappel1: [''],
      date_rappel2: [this.Date_rap2_value],
      rappel2: [''],
      date_rappel3: [this.Date_rap3_value],
      rappel3: [''],
      etape: ['', [Validators.required]],
      remarque_commercial: ['']
    });
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.patientForm.controls[controlName].hasError(errorName);
  }

  /* Reset form */
  resetForm() {
    this.patientForm.reset();
    Object.keys(this.patientForm.controls).forEach(key => {
      this.patientForm.controls[key].setErrors(null);
    });
  }

  /* Submit ajout patient */
  submitPatient() {
    if (this.patientForm.valid){
      this.patientApi.AddPatient(this.patientForm.value);
      this.resetForm();
    }
  }

}
