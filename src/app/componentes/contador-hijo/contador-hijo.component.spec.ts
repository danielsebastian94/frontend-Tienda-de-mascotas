import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorHijoComponent } from './contador-hijo.component';

describe('ContadorHijoComponent', () => {
  let component: ContadorHijoComponent;
  let fixture: ComponentFixture<ContadorHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
