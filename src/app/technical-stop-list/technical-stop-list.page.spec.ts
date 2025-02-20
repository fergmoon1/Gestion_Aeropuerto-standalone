import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechnicalStopListPage } from './technical-stop-list.page';

describe('TechnicalStopListPage', () => {
  let component: TechnicalStopListPage;
  let fixture: ComponentFixture<TechnicalStopListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalStopListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
