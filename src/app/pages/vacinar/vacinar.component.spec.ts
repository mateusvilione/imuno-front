import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinarComponent } from './vacinar.component';

describe('VacinarComponent', () => {
  let component: VacinarComponent;
  let fixture: ComponentFixture<VacinarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacinarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
