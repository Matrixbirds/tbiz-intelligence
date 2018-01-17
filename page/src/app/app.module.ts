import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { LayoutComponent } from './component/layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent, MetricsComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './dashboard/login/login.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ErrorsComponent, NotFound, PermissionDenied, InternalError } from './component/errors/errors.component';
import { BreadcrumbsComponent } from './component/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LayoutComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    MetricsComponent,
    ErrorsComponent,
    NotFound,
    PermissionDenied,
    InternalError,
    BreadcrumbsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
