import { BrowserModule } from '@angular/platform-browser';
import { Component,NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpInterceptorClassService } from './http-interceptor-class.service';
import { CommonModule } from "@angular/common";
import { AdminComponent  } from './admin.component.module';
import { Globals } from './globals';

import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardLearnerComponent } from './dashboard-learner/dashboard-learner.component';
import { DashboardInstructorComponent } from './dashboard-instructor/dashboard-instructor.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { RegisterService } from './services/register.service';
import { EditProfileService } from './services/edit-profile.service';
import { CourseService } from './services/course.service';
import { CommonService } from './services/common.service';

import { UserListComponent } from './user-list/user-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CertificateComponent } from './certificate/certificate.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { RegisterInstructorComponent } from './register-instructor/register-instructor.component';
import { RegisterLearnerComponent } from './register-learner/register-learner.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { EditProfileLearnerComponent } from './edit-profile-learner/edit-profile-learner.component';
import { EditProfileAdminComponent } from './edit-profile-admin/edit-profile-admin.component';
import { EditProfileInstructorComponent } from './edit-profile-instructor/edit-profile-instructor.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderRegisterComponent } from './header-register/header-register.component';
import { FooterRegisterComponent } from './footer-register/footer-register.component';
import { LinkListComponent } from './link-list/link-list.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LearnerCoursesComponent } from './learner-courses/learner-courses.component';
import { InstructorCourseFormComponent } from './instructor-course-form/instructor-course-form.component';
import { InstructorCoursesComponent } from './instructor-courses/instructor-courses.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PaymentComponent } from './payment/payment.component';
import { LmsInformationComponent } from './lms-information/lms-information.component';

const routes: Routes = [	
  {
    path: '',
        component: AdminComponent,
        children: [
		  
		          { path : 'dashboard-admin', component : DashboardAdminComponent,canActivate : [AuthGuard] },
				  { path : 'dashboard-learner', component : DashboardLearnerComponent,canActivate : [AuthGuard] },
				  { path : 'dashboard-instructor', component : DashboardInstructorComponent,canActivate : [AuthGuard] },
				  { path : 'user-list', component : UserListComponent,canActivate : [AuthGuard] },
				  { path : 'calendar', component : CalendarComponent,canActivate : [AuthGuard] },
				  { path : 'certificate', component : CertificateComponent,canActivate : [AuthGuard] },
				  { path : 'course-detail', component : CourseDetailComponent,canActivate : [AuthGuard] },
				  { path : 'course-list', component : CourseListComponent,canActivate : [AuthGuard] },
				  { path : 'register-instructor', component : RegisterInstructorComponent,canActivate : [AuthGuard] },
				  //{ path : 'register-admin', component : RegisterAdminComponent,canActivate : [AuthGuard] },
				  { path : 'register-learner', component : RegisterLearnerComponent,canActivate : [AuthGuard] },
				  { path : 'login', component : LoginComponent,canActivate : [AuthGuard] },
				  { path : 'link-list', component : LinkListComponent,canActivate : [AuthGuard] },
				  { path : 'forgot-password', component : ForgotPasswordComponent,canActivate : [AuthGuard] },
				  //{ path : 'edit-profile-learner', component : EditProfileLearnerComponent,canActivate : [AuthGuard] },
				  //{ path : 'edit-profile-instructor', component : EditProfileInstructorComponent,canActivate : [AuthGuard] },
				  { path : 'edit-profile', component : EditProfileAdminComponent,canActivate : [AuthGuard] },
				  { path : 'learner-courses', component : LearnerCoursesComponent,canActivate : [AuthGuard] },
				  { path : 'instructor-course-form', component : InstructorCourseFormComponent,canActivate : [AuthGuard] },
				  { path : 'instructor-courses', component : InstructorCoursesComponent,canActivate : [AuthGuard] },
				  { path : 'welcome', component : WelcomeComponent,canActivate : [AuthGuard] },
				  { path : 'payment', component : PaymentComponent,canActivate : [AuthGuard] },
				  { path : 'lms-information', component : LmsInformationComponent,canActivate : [AuthGuard] },
				  { path : '', redirectTo: 'link-list', pathMatch:'full'},
				  { path : '**', redirectTo : 'link-list' }
        
        ]
  }
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
 
  providers: [Globals,AuthGuard,AuthService,RegisterService,EditProfileService,CourseService,CommonService,{
    
    provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorClassService,
      multi: true
    }],
  bootstrap: [AdminComponent]
})
export class AdminRoutingModule  { }
