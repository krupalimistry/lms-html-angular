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
import { RegisterInstructorComponent } from './register-instructor/register-instructor.component';
import { RegisterLearnerComponent } from './register-learner/register-learner.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { EditProfileLearnerComponent } from './edit-profile-learner/edit-profile-learner.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderRegisterComponent } from './header-register/header-register.component';
import { FooterRegisterComponent } from './footer-register/footer-register.component';
import { LinkListComponent } from './link-list/link-list.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [	
  {
    path: '',
        component: AdminComponent,
        children: [
		  
		          { path : 'dashboard', component : DashboardComponent,canActivate : [AuthGuard] },
				  { path : 'user-list', component : UserListComponent,canActivate : [AuthGuard] },
				  { path : 'calendar', component : CalendarComponent,canActivate : [AuthGuard] },
				  { path : 'certificate', component : CertificateComponent,canActivate : [AuthGuard] },
				  { path : 'course-detail', component : CourseDetailComponent,canActivate : [AuthGuard] },
				  { path : 'register-instructor', component : RegisterInstructorComponent,canActivate : [AuthGuard] },
				  { path : 'register-admin', component : RegisterAdminComponent,canActivate : [AuthGuard] },
				  { path : 'register-learner', component : RegisterLearnerComponent,canActivate : [AuthGuard] },
				  { path : 'login', component : LoginComponent,canActivate : [AuthGuard] },
				  { path : 'link-list', component : LinkListComponent,canActivate : [AuthGuard] },
				  { path : 'forgot-password', component : ForgotPasswordComponent,canActivate : [AuthGuard] },
				  { path : 'edit-profile-learner', component : EditProfileLearnerComponent,canActivate : [AuthGuard] },
				  { path: '', redirectTo: 'link-list', pathMatch:'full'},
				  { path: '**', redirectTo : 'link-list' }
        
        
		
        ]
  }
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
 
  providers: [Globals,AuthGuard],
  bootstrap: [AdminComponent]
})
export class AdminRoutingModule  { }
