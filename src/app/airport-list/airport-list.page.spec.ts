import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AirportListPage } from './airport-list.page';

describe('AirportListPage', () => {
  let component: AirportListPage;
  let fixture: ComponentFixture<AirportListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
