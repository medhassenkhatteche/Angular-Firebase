import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePatientClassesComponent } from './liste-patient-classes.component';

describe('ListePatientClassesComponent', () => {
  let component: ListePatientClassesComponent;
  let fixture: ComponentFixture<ListePatientClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePatientClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePatientClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
