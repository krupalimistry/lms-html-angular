import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { EditProfileService } from '../services/edit-profile.service';
import { Router } from '@angular/router';
import { Globals } from '../globals';
declare function myInput() : any;
declare var $,swal,Bloodhound: any;

@Component({
  selector: 'app-edit-profile-admin',
  templateUrl: './edit-profile-admin.component.html',
  styleUrls: ['./edit-profile-admin.component.css']
})
export class EditProfileAdminComponent implements OnInit {

	newpassEntity;
	same;
	submitted2;
	btn_disable2;
	CompanyEntity;
	RegisterEntity;
	submitted;
	btn_disable;
	submitted1;
	btn_disable1;
	CountryList;
	stateList;
	EducationLeveList;

	constructor(private authService: AuthService,private router: Router,public globals: Globals,
	private EditProfileService:EditProfileService) { }

  ngOnInit() {
		var skills = new Bloodhound({
		  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
		  queryTokenizer: Bloodhound.tokenizers.whitespace,
		  prefetch: {
			url: '../assets/skills.json'
		  }
		});
		skills.initialize();
			 var elt = $('#skills');
				elt.tagsinput({
				  typeaheadjs: {
					name: 'skills',
					displayKey: 'name',
					valueKey: 'name',
					source: skills.ttAdapter()
				  }
				});
		this.default();
	  setTimeout(function(){
			if( $(".bg_white_block").hasClass( "ps--active-y" )){  
				$('footer').removeClass('footer_fixed');     
			}      
			else{  
				$('footer').addClass('footer_fixed');    
			}
		},100);
		
	}

	default(){
		this.newpassEntity = {};
		this.globals.isLoading = true;
    	this.btn_disable = false;
		this.RegisterEntity={}; 
    	this.RegisterEntity.CountryId ='';
		this.RegisterEntity.StateId ='';
		this.newpassEntity={};
		this.CompanyEntity={};
	
    this.EditProfileService.getProfileById(this.globals.authData.UserId)
      .then((data) => {
			this.RegisterEntity = data['user'];
			if(this.RegisterEntity.CountryId==0){
				this.RegisterEntity.CountryId ='';
			}
			if(this.RegisterEntity.StateId==0){
				this.RegisterEntity.StateId ='';
			}
			this.CountryList = data['country'];
			this.stateList = data['state'];
			this.EducationLeveList = data['educationLevel'];
			this.CompanyEntity = data['company'];
			if(this.CompanyEntity!=null && this.CompanyEntity.CountryId==0){
				this.CompanyEntity.CountryId ='';
			}
			if(this.CompanyEntity!=null && this.CompanyEntity.StateId==0){
				this.CompanyEntity.StateId ='';
			}
			this.globals.isLoading = false;
			setTimeout(function(){
				myInput();
			},100);
      },
      (error) => {
        this.globals.isLoading = false;
        this.router.navigate(['/']);
      });
	}

	editprofile(RegisterForm){
	
    this.submitted = false;	
		
		if(RegisterForm.valid){
			this.btn_disable = true;
			this.globals.isLoading = true;
			this.EditProfileService.editprofile(this.RegisterEntity)			
			.then((data) => 
			{ 
					this.globals.isLoading = false;
					this.btn_disable = false;
					this.submitted = false;
				if(data=='email duplicate'){
					swal({
						position: 'top-end',
						type: 'error',
						title: 'This email is not valid',
						showConfirmButton: false,
						timer: 1500
					})					
				} else {					
					swal({
						position: 'top-end',
						type: 'success',
						title: 'Profile updated successfully',
						showConfirmButton: false,
						timer: 1500
					})
				}
				
			}, 
			(error) => 
			{
				this.btn_disable = false;
				this.submitted = false;
				this.globals.isLoading = false;
				this.router.navigate(['/pagenotfound']);
			});
		}
		
	}

	updateEducationDetails(eduForm)
	{
		this.submitted1 = false;				
		if(eduForm.valid){
			this.btn_disable1 = true;
			this.globals.isLoading = true;
			this.EditProfileService.updateEducationDetails(this.RegisterEntity)			
			.then((data) => 
			{ 
				this.globals.isLoading = false;
				this.btn_disable1 = false;
				this.submitted1 = false;
				swal({
					position: 'top-end',
					type: 'success',
					title: 'Profile updated successfully',
					showConfirmButton: false,
					timer: 1500
				})
			}, 
			(error) => 
			{
				this.btn_disable1 = false;
				this.submitted1 = false;
				this.globals.isLoading = false;
				this.router.navigate(['/pagenotfound']);
			});
		}			
	}

	updateCompany(companyForm)
	{
		this.submitted1 = false;				
		if(companyForm.valid){
			this.btn_disable1 = true;
			this.globals.isLoading = true;
			this.CompanyEntity.UpdatedBy = this.globals.authData.UserId;
			this.EditProfileService.updateCompany(this.CompanyEntity)			
			.then((data) => 
			{ 
				this.globals.isLoading = false;
				this.btn_disable1 = false;
				this.submitted1 = false;
				swal({
					position: 'top-end',
					type: 'success',
					title: 'Company details updated successfully',
					showConfirmButton: false,
					timer: 1500
				})
			}, 
			(error) => 
			{
				this.btn_disable1 = false;
				this.submitted1 = false;
				this.globals.isLoading = false;
				this.router.navigate(['/pagenotfound']);
			});
		}			
	}
	

	getStateList(RegisterForm)
	{ 
		RegisterForm.form.controls.StateId.markAsDirty();
		this.RegisterEntity.StateId='';
		if(this.RegisterEntity.CountryId > 0){
			this.EditProfileService.getStateList(this.RegisterEntity.CountryId)
			.then((data) => 
			{
				this.stateList = data;
			}, 
			(error) => 
			{
				this.globals.isLoading = false;
				this.router.navigate(['/pagenotfound']);
			});
		} else {
			this.stateList = [];
		}
	}
	
	logout()
    { 
      this.globals.authData = '';	
      localStorage.removeItem('token');
      this.router.navigate(['/']); 
	}
	
	ChangePassword(newpassForm)
	{	 
		this.submitted2 = true;
		if(newpassForm.valid && !this.same)
		{			
			this.newpassEntity.UserId=this.globals.authData.UserId;
			this.btn_disable2 = true;
			this.globals.isLoading = true;
			this.EditProfileService.changepassword(this.newpassEntity)
			.then((data) => 
			{
				if(data=='wrong current password')
				{						
					swal({
						type: 'warning',
						title: 'Oops...',
						text: 'You entered wrong current password',
						})						
					this.globals.isLoading = false;
					this.btn_disable2 = false;
					this.submitted2 = false;
				}
				else
				{
					this.btn_disable2 = false;
					this.submitted2 = false;
					this.newpassEntity = {};
					newpassForm.form.markAsPristine();
					this.globals.isLoading = false;
					swal({
						position: 'top-end',
						type: 'success',
						title: 'Your password has been changed',
						showConfirmButton: false,
						timer: 1500
					})
				}
			}, 
			(error) => 
			{
				this.globals.isLoading = false;
				this.router.navigate(['/pagenotfound']);
				this.btn_disable2 = false;
				this.submitted2 = false;
			});	
		
		}
	}
	
	checkpassword(){ 
		if(this.newpassEntity.cPassword != this.newpassEntity.nPassword){
			this.same = true;
		} else {
			this.same = false;
		}		
	}

	clearChangePassword(newpassForm){
		this.btn_disable2 = false;
		this.submitted2 = false;
		this.same = false;
		this.newpassEntity = {};
		newpassForm.form.markAsPristine();
	}

	clearEditProfile(){ 
		this.default();
	}

}
