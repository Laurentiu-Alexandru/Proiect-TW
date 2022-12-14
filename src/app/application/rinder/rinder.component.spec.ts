import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RinderComponent } from './rinder.component';

describe('RinderComponent', () => {
  let component: RinderComponent;
  let fixture: ComponentFixture<RinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
