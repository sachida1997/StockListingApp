import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../_models/user';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
    userForm: FormGroup;
   
   
    defaultUser: User = {
      id: 0,
      username: '',
      firstName: '',
      lastName: '',
      number: 0,
      dateOfBirth: '',
      email: '',
      roles: ["User"],
      password: '',

      securityQuestion: 'What is your favorite color?',
      securityAnswer: 'Blue',
      confirmPassword: undefined
    };
   
    constructor(private fb: FormBuilder, private userService: UserServiceService, private routes: Router) {
   
      this.userForm = this.fb.group({
        email: [this.defaultUser.email, [Validators.required, Validators.email]],
        username: [this.defaultUser.username, Validators.required],
        firstName: [this.defaultUser.firstName, Validators.required],
        lastName: [this.defaultUser.lastName, Validators.required],
        password: [this.defaultUser.password, [Validators.required, Validators.minLength(6)]],
        
        number: [this.defaultUser.number, [Validators.pattern('[0-9]*'), Validators.minLength(10)]],
        dateOfBirth: [this.defaultUser.dateOfBirth || '', Validators.required],
        roles: [this.defaultUser.roles || '', Validators.required],
        securityQuestion: [this.defaultUser.securityQuestion || '', Validators.required],
        securityAnswer: [this.defaultUser.securityAnswer || '', Validators.required],
        shareData: [false]
      }, { validators: this.passwordMatchValidator });
    }
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
   
   
   
   
   
    signUp() {
      console.log('Sign up button clicked');
      console.log('Form values:', this.userForm.value);
      console.log(this.userForm);
   
      console.log(this.userForm.value);
      if (this.userForm.value) {
   
        this.userService.registerNewUser(this.userForm.value).subscribe(
          (response: any) => {
   
            console.log('User registered successfully', response);
            
            this.routes.navigate(['/login']);
          },
          (error: any) => {
   
            console.error('Error during user registration', error);
          }
        );
      } else {
   
        console.error('Form is invalid. Cannot submit.');
      }
    }
   
    passwordMatchValidator(group: FormGroup): { [s: string]: boolean } | null {
      const password = group.get('password')?.value;
      
   return null;
  }
    
  }
  
