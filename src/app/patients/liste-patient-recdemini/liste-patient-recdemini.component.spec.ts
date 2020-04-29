import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePatientRecdeminiComponent } from './liste-patient-recdemini.component';

describe('ListePatientRecdeminiComponent', () => {
  let component: ListePatientRecdeminiComponent;
  let fixture: ComponentFixture<ListePatientRecdeminiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePatientRecdeminiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePatientRecdeminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
