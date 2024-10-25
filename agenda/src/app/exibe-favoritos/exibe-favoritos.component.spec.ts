import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeFavoritosComponent } from './exibe-favoritos.component';

describe('ExibeFavoritosComponent', () => {
  let component: ExibeFavoritosComponent;
  let fixture: ComponentFixture<ExibeFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExibeFavoritosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibeFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
