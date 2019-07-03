import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeFederacaoComponent } from './unidade-federacao.component';

describe('UnidadeFederacaoComponent', () => {
  let component: UnidadeFederacaoComponent;
  let fixture: ComponentFixture<UnidadeFederacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadeFederacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeFederacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
