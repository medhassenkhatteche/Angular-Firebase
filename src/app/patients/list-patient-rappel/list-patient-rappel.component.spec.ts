import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPatientRappelComponent } from './list-patient-rappel.component';

describe('ListPatientRappelComponent', () => {
  let component: ListPatientRappelComponent;
  let fixture: ComponentFixture<ListPatientRappelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPatientRappelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPatientRappelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
