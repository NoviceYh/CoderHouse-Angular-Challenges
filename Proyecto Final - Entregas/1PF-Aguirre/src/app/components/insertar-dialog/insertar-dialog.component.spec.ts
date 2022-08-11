import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarDialogComponent } from './insertar-dialog.component';

describe('InsertarDialogComponent', () => {
  let component: InsertarDialogComponent;
  let fixture: ComponentFixture<InsertarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
