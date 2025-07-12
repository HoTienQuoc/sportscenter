import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { BasketService } from '../../basket/basket.service';
import { DeliveryOption } from '../../shared/models/deliveryOptions';
import { CheckoutComponent } from '../checkout/checkout.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipment.component',
  imports: [CommonModule,FormsModule],
  templateUrl: './shipment.component.html',
  styleUrl: './shipment.component.scss'
})
export class ShipmentComponent {
  deliveryOptions: DeliveryOption[] = [
    {
      id: 1,
      name: 'Fedex',
      deliveryTime: '2 days',
      description: 'Fast delivery',
      price: 300,
    },
    {
      id: 2,
      name: 'DTDC',
      deliveryTime: '3 days',
      description: 'Reliable delivery',
      price: 200,
    },
    {
      id: 3,
      name: 'First Flight',
      deliveryTime: '4 days',
      description: 'Economical delivery',
      price: 150,
    },
    {
      id: 4,
      name: 'Normal',
      deliveryTime: '7 days',
      description: 'Standard delivery',
      price: 100,
    },
  ];

  selectedOption: number | undefined;
  shipmentForm: FormGroup;
  constructor(
    private basketService: BasketService,
    private formBuilder: FormBuilder,
    private router: Router,
    private checkoutComponent: CheckoutComponent
  ) {
    this.shipmentForm = this.formBuilder.group({
      selectedOption: [this.selectedOption, Validators.required],
    });

    //Initialize this selected option
    this.selectedOption = this.deliveryOptions[0].id;
    this.updateShipmentPrice();
  }
  updateShipmentPrice(){
    const selectedDeliveryOption = this.deliveryOptions.find(
      (option)=>option.id === this.selectedOption
    );
    if(selectedDeliveryOption){
      this.basketService.updateShippingPrice(selectedDeliveryOption.price);
    }
  }
  goToNextStep(){
      this.updateShipmentPrice();
      //Navigate to review page
      this.router.navigate(['/checkout/review']);
      //set the current step to review
      this.checkoutComponent.setCurrentStep('review');
    
  } 
}
