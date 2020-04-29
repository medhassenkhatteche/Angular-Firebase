import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePatientDevdefComponent } from './liste-patient-devdef.component';

describe('ListePatientDevdefComponent', () => {
  let component: ListePatientDevdefComponent;
  let fixture: ComponentFixture<ListePatientDevdefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePatientDevdefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePatientDevdefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
