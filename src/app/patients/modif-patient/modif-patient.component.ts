import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {FormGroup} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {PatientService} from '../../service/patient.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {Validators} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-modif-patient',
  templateUrl: './modif-patient.component.html',
  styleUrls: ['./modif-patient.component.scss']
})

export class ModifPatientComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  selectedBindingType: string;
  editPatientForm: FormGroup;
  BindingType: any = ['Vol rembourse', 'Accompagnant gratuit'];

  selectedEtapeType: string;
  EtapeType: any = ['Réception de demande initiale', 'Réception des photos', 'Envoie du devis définitif', 'Préconfirmation (date fixée)', 'Confirmation', 'Dossier classé'];

  ngOnInit(): void {
    this.updatePatientForm();
  }

  constructor(public fb: FormBuilder,
              private location: Location,
              private patientApi: PatientService,
              private actRoute: ActivatedRoute,
              private router: Router) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.patientApi.GetPatient(id).valueChanges().subscribe(data => {
      this.editPatientForm.setValue(data);
    });
  }

  /* Update form */
  updatePatientForm(){
    this.editPatientForm = this.fb.group({
      date_reception_demande: [''],
      num_dossier: [''],
      nom_complet: ['', [Validators.required]],
      adresse_mail: ['', [Validators.required]],
      num_tel: [''],
      pays: [''],
      interventions: ['', [Validators.required]],
      periode_souhaite: [''],
      offre: ['', [Validators.required]],
      date_emission: [''],
      devis: [''],
      sejour: [''],
      date_rappel1: [''],
      rappel1: [''],
      date_rappel2: [''],
      rappel2: [''],
      date_rappel3: [''],
      rappel3: [''],
      etape: ['', [Validators.required]],
      remarque_commercial: ['']
    });
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.editPatientForm.controls[controlName].hasError(errorName);
  }

  /* Go to previous page */
  goBack(){
    this.location.back();
  }

  /* Submit patient */
  updatePatient() {
    var id = this.actRoute.snapshot.paramMap.get('id');
    if(window.confirm('Voulez-vous vraiment modifier ce patient?')){
      this.patientApi.UpdatePatient(id, this.editPatientForm.value);
      this.router.navigate(['liste-patient']);
    }
  }

}
