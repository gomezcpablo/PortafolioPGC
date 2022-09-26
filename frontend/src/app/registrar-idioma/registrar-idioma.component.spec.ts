import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarIdiomaComponent } from './registrar-idioma.component';

describe('RegistrarIdiomaComponent', () => {
  let component: RegistrarIdiomaComponent;
  let fixture: ComponentFixture<RegistrarIdiomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarIdiomaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarIdiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
