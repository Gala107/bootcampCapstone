import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginOption: string = "";
  isAdmin: boolean = false;
  msg: string = "";
  instanceRef: any;
  subscription: any;

  signInForm: any = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    isAdmin: new FormControl('', [Validators.required])
  })

  signUpForm: any = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    isAdmin: new FormControl('false')
  })

  constructor(private service: LoginService, private router: Router) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  signIn(): void {
    let login = this.signInForm.value;
    this.isAdmin = login.isAdmin;

    this.subscription = this.service.signIn(login).subscribe({
      next: (result: any) => {
        if (result.user != null) {
          sessionStorage.setItem("userEmail", result.user.email);
          sessionStorage.setItem("userName", result.user.firstName);
          if (result.user.isAdmin == "true") {
            sessionStorage.setItem("userType", "admin");
            //this.router.navigate(["admin"], { skipLocationChange: true });
          } else {
            sessionStorage.setItem("userType", "client");
            //this.router.navigate(["client"], { skipLocationChange: true });
          }
          this.instanceRef.close();
        } else {
          this.msg = result.message;
        }
      },
      error: (error: any) => { console.error(error) },
      complete: () => console.log("Sign In is completed.")
    })
    this.signInForm.reset();
  }

  signUp(): void {
    let login = this.signUpForm.value;

    this.subscription = this.service.signUp(login).subscribe({
      next: (result: any) => { this.msg = result; },
      error: (error: any) => { console.error(error) },
      complete: () => console.log("Sign Up is completed.")
    })
    this.signUpForm.reset();
  }
}
