import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Desafio2Component } from './desafio-2.component';

describe('Desafio2Component', () => {
  let component: Desafio2Component;
  let fixture: ComponentFixture<Desafio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Desafio2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Desafio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
