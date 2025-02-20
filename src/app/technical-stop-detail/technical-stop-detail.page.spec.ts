import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechnicalStopDetailPage } from './technical-stop-detail.page';

describe('TechnicalStopDetailPage', () => {
  let component: TechnicalStopDetailPage;
  let fixture: ComponentFixture<TechnicalStopDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalStopDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
