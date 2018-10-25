import { BrowserModule } from '@angular/platform-browser';
import { Component,NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent
    
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
