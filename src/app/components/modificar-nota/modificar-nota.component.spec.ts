import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarNotaComponent } from './modificar-nota.component';

describe('ModificarNotaComponent', () => {
  let component: ModificarNotaComponent;
  let fixture: ComponentFixture<ModificarNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarNotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
