import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePatientRecphoComponent } from './liste-patient-recpho.component';

describe('ListePatientRecphoComponent', () => {
  let component: ListePatientRecphoComponent;
  let fixture: ComponentFixture<ListePatientRecphoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePatientRecphoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePatientRecphoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
