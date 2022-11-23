import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoresColorComponent } from './valores-color.component';

describe('ValoresColorComponent', () => {
  let component: ValoresColorComponent;
  let fixture: ComponentFixture<ValoresColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValoresColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValoresColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
