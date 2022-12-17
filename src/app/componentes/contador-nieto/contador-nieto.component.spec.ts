import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorNietoComponent } from './contador-nieto.component';

describe('ContadorNietoComponent', () => {
  let component: ContadorNietoComponent;
  let fixture: ComponentFixture<ContadorNietoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorNietoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorNietoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
