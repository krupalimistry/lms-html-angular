import { BrowserModule } from '@angular/platform-browser';
import { Component,NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CertificateComponent } from './certificate/certificate.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';


@NgModule({
  declarations: [
    AdminComponent,
	HeaderComponent,
	FooterComponent,
	SidebarComponent,
    DashboardComponent,
	UserListComponent,
	CalendarComponent,
	CertificateComponent,
	CourseDetailComponent,
    
  ],
  imports: [
	//BrowserModule,
	CommonModule,
	HttpModule,
	  FormsModule,
	  AdminRoutingModule
  ]  
})
export class AdminModule { }
