import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPacienteComponent } from './dashboard-paciente.component';

describe('DashboardPacienteComponent', () => {
  let component: DashboardPacienteComponent;
  let fixture: ComponentFixture<DashboardPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
