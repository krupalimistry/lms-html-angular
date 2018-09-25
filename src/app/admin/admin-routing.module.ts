import { BrowserModule } from '@angular/platform-browser';
import { Component,NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from "@angular/common";
import { AdminComponent  } from './admin.component.module';
import { Globals } from './globals';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CertificateComponent } from './certificate/certificate.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';



const routes: Routes = [	
  {
    path: '',
        component: AdminComponent,
        children: [
		  
		          { path : 'dashboard', component : DashboardComponent },
				  { path : 'user-list', component : UserListComponent },
				  { path : 'calendar', component : CalendarComponent },
				  { path : 'certificate', component : CertificateComponent },
          { path : 'course-detail', component : CourseDetailComponent }
        
        
		
        ]
  }
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
 
  providers: [Globals],
  bootstrap: [AdminComponent]
})
export class AdminRoutingModule  { }
