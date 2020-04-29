import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePatientConfirmesComponent } from './liste-patient-confirmes.component';

describe('ListePatientConfirmesComponent', () => {
  let component: ListePatientConfirmesComponent;
  let fixture: ComponentFixture<ListePatientConfirmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePatientConfirmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePatientConfirmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
