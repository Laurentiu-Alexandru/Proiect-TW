import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatesteComponent } from './plateste.component';

describe('PlatesteComponent', () => {
  let component: PlatesteComponent;
  let fixture: ComponentFixture<PlatesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
