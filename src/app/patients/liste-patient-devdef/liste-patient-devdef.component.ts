import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { Patient} from '../../service/patient';
import {MatPaginator} from '@angular/material/paginator';
import { PatientService } from '../../service/patient.service';
import {MatSort} from "@angular/material/sort";
import {TableUtil} from "../liste-patient-devdef/tableUtil";

@Component({
  selector: 'app-liste-patient-devdef',
  templateUrl: './liste-patient-devdef.component.html',
  styleUrls: ['./liste-patient-devdef.component.scss']
})
export class ListePatientDevdefComponent implements OnInit {

  search:string;
  dataSource: MatTableDataSource<Patient>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  PatientData: any = [];
  displayedColumns: any[] = [
    'date_reception_demande',
    'num_dossier',
    'nom_complet',
    'adresse_mail',
    'num_tel',
    'pays',
    'interventions',
    'periode_souhaite',
    'offre',
    'date_emission',
    'devis',
    'sejour',
    'date_rappel1',
    'rappel1',
    'date_rappel2',
    'rappel2',
    'date_rappel3',
    'rappel3',
    'etape',
    'remarque_commercial',
    'action'
  ];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private patientApi: PatientService) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.PatientData);
    //this.dataSource.sort = this.sort;
    this.patientApi.GetPatientList()
    console.log('Affichage aprés le sort!');
    console.log(this.dataSource);
    this.load();
  }

  load()  {
    this.patientApi.GetPatientList()
      .snapshotChanges().subscribe(patients => {
      patients.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        if(a['etape'] =='Envoie du devis définitif'){
          this.PatientData.push(a as Patient);
        }
      });
      this.dataSource = new MatTableDataSource(this.PatientData);
      /* Pagination */
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        console.log('Affichage aprés la pagination!');
        console.log(this.dataSource);
      }, 0);
    });
  }

  /* Supprimer un patient! */
  deletePatient(index: number, e){
    if(window.confirm('Etes-vous sure de vouloir supprimer ce patient?')) {
      //const data = this.dataSource.data;
      //data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.patientApi.DeletePatient(e.$key);
      //this.dataSource.data = data;
      window.location.reload();
    }
  }

  /*Recherche par mot cléf*/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(event);
  }

  /*Generer fichier Excel*/
  exportTable(){
    TableUtil.exportToExcel("ListePatientsDevdefTable");
  }

}
