import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadernetaVacinacaoComponent } from './caderneta-vacinacao.component';

describe('CadernetaVacinacaoComponent', () => {
  let component: CadernetaVacinacaoComponent;
  let fixture: ComponentFixture<CadernetaVacinacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadernetaVacinacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadernetaVacinacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
