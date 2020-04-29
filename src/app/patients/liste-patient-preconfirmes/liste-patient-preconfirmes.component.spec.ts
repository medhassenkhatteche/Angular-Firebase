import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePatientPreconfirmesComponent } from './liste-patient-preconfirmes.component';

describe('ListePatientPreconfirmesComponent', () => {
  let component: ListePatientPreconfirmesComponent;
  let fixture: ComponentFixture<ListePatientPreconfirmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePatientPreconfirmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePatientPreconfirmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
