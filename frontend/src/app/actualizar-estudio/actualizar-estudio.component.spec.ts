import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEstudioComponent } from './actualizar-estudio.component';

describe('ActualizarEstudioComponent', () => {
  let component: ActualizarEstudioComponent;
  let fixture: ComponentFixture<ActualizarEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarEstudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
