import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCampanhaComponent } from './cadastrar-campanha.component';

describe('CadastrarCampanhaComponent', () => {
  let component: CadastrarCampanhaComponent;
  let fixture: ComponentFixture<CadastrarCampanhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarCampanhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarCampanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
