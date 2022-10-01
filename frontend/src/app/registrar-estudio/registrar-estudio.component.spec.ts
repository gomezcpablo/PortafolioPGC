import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEstudioComponent } from './registrar-estudio.component';

describe('RegistrarEstudioComponent', () => {
  let component: RegistrarEstudioComponent;
  let fixture: ComponentFixture<RegistrarEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarEstudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
