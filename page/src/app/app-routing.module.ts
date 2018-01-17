import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent, MetricsComponent } from '~/app/dashboard/dashboard.component';
import { LoginComponent } from '~/app/dashboard/login/login.component'

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {path: '', redirectTo: 'metrics', pathMatch: 'prefix'},
      {path: 'metrics', component: MetricsComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
