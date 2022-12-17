import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorPadreComponent } from './contador-padre.component';

describe('ContadorPadreComponent', () => {
  let component: ContadorPadreComponent;
  let fixture: ComponentFixture<ContadorPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorPadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
