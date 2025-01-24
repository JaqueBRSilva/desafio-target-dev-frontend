import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Desafio3Component } from './desafio-3.component';

describe('Desafio3Component', () => {
  let component: Desafio3Component;
  let fixture: ComponentFixture<Desafio3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Desafio3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Desafio3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
