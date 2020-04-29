import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifPatientComponent } from './modif-patient.component';

describe('ModifPatientComponent', () => {
  let component: ModifPatientComponent;
  let fixture: ComponentFixture<ModifPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
