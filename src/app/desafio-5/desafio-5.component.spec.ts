import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Desafio5Component } from './desafio-5.component';

describe('Desafio5Component', () => {
  let component: Desafio5Component;
  let fixture: ComponentFixture<Desafio5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Desafio5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Desafio5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
