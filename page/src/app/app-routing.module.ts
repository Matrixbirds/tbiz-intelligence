import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent, MetricsComponent } from '~/app/dashboard/dashboard.component';
import { LoginComponent } from '~/app/dashboard/login/login.component';
import { NotFound, PermissionDenied, InternalError, ErrorsComponent } from './component/errors/errors.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {path: '', redirectTo: 'metrics', pathMatch: 'prefix'},
      {path: 'metrics', component: MetricsComponent},
      {path: '404', component: NotFound},
      {path: '403', component: PermissionDenied},
      {path: '500', component: InternalError},
      {path: '**', redirectTo: '404'}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
