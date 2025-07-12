import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login.component',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formsBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    ){
    this.loginForm = this.formsBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }
  onSubmit(){
    this.accountService.login(this.loginForm.value).subscribe({
      next: user => {
        const redirect = this.accountService.redirectUrl ? this.accountService.redirectUrl : '/store';
        this.router.navigateByUrl(redirect);
        this.accountService.redirectUrl = null; //clearing the redirect url post navigation
      },
      error: () =>{
      }
    })
  }
}
