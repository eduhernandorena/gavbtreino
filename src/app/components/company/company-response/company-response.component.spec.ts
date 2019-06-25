import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyResponseComponent } from './company-response.component';

describe('CompanyResponseComponent', () => {
  let component: CompanyResponseComponent;
  let fixture: ComponentFixture<CompanyResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
