import { BrowserModule } from '@angular/platform-browser';
import { Component,NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseListComponent } from './course-list/course-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent
    
    //HomeComponent,
    //DashboardComponent
  ],
  imports: [
    BrowserModule,
	HttpModule,
	FormsModule,
	HttpClientModule,
	RouterModule.forRoot([	
		{
			path: '',
			loadChildren: './admin/admin.module#AdminModule'
		}
	])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
