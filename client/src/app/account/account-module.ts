import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountRoutingModule } from './account-routing-module';
import { SharedModule } from '../shared/shared-module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, AccountRoutingModule, AccountRoutingModule, SharedModule,
  ],
  exports: [SharedModule]
})
export class AccountModule { }
