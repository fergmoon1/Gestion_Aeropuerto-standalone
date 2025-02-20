import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./login/login.page').then(m => m.LoginPage) },
  { path: 'register', loadComponent: () => import('./register/register.page').then(m => m.RegisterPage) },
  { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.page').then(m => m.DashboardPage) },
  { path: 'flight-list', loadComponent: () => import('./flight-list/flight-list.page').then(m => m.FlightListPage) },
  { path: 'flight-detail/:id', loadComponent: () => import('./flight-detail/flight-detail.page').then(m => m.FlightDetailPage) },
  { path: 'flight-schedule', loadComponent: () => import('./flight-schedule/flight-schedule.page').then(m => m.FlightSchedulePage) },
  { path: 'airport-list', loadComponent: () => import('./airport-list/airport-list.page').then(m => m.AirportListPage) },
  { path: 'airport-detail/:id', loadComponent: () => import('./airport-detail/airport-detail.page').then(m => m.AirportDetailPage) },
  { path: 'technical-stop-list', loadComponent: () => import('./technical-stop-list/technical-stop-list.page').then(m => m.TechnicalStopListPage) },
  { path: 'technical-stop-detail/:id', loadComponent: () => import('./technical-stop-detail/technical-stop-detail.page').then(m => m.TechnicalStopDetailPage) },
  { path: 'user-profile', loadComponent: () => import('./user-profile/user-profile.page').then(m => m.UserProfilePage) },
  { path: 'roles', loadComponent: () => import('./roles/roles.page').then(m => m.RolesPage) },
  { path: 'logs', loadComponent: () => import('./logs/logs.page').then(m => m.LogsPage) },
  { path: 'settings', loadComponent: () => import('./settings/settings.page').then(m => m.SettingsPage) },
];