import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Informacao } from './informacao';

describe('Informacao', () => {
  let component: Informacao;
  let fixture: ComponentFixture<Informacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Informacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Informacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
