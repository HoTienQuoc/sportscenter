import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckoutComponent } from '../checkout/checkout.component';
import { Address } from '../../shared/models/address';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-address.component',
  imports: [ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent {
  addressForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private checkoutComponent: CheckoutComponent
  ){
    this.addressForm = this.formBuilder.group({
      Fname: ['', Validators.required],
      Lname: ['', Validators.required],
      Street: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      ZipCode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
    });
  }
  onSubmit(){
    if(this.addressForm.valid){
      const addressData: Address = this.addressForm.value;
      console.log('Submitted Address:', addressData);
    }
  }
  goToNextStep(){
    if(this.addressForm.valid){
      //Navigate to shipment page
      this.router.navigate(['/checkout/shipment']);
      //set the current step to Shipment
      this.checkoutComponent.setCurrentStep('shipment');
    }
  }
}
