import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlightSchedulePage } from './flight-schedule.page';

describe('FlightSchedulePage', () => {
  let component: FlightSchedulePage;
  let fixture: ComponentFixture<FlightSchedulePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
