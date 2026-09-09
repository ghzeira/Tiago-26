import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExFinal } from './ex-final';

describe('ExFinal', () => {
  let component: ExFinal;
  let fixture: ComponentFixture<ExFinal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExFinal]
    }).compileComponents();

    fixture = TestBed.createComponent(ExFinal);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
