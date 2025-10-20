import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem } from '../../models/product.model';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;

  // Form data
  fullName: string = '';
  address: string = '';
  creditCardNumber: string = '';

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      // In a real application, you would send this data to a server
      console.log('Order submitted:', {
        fullName: this.fullName,
        address: this.address,
        creditCardNumber: this.creditCardNumber,
        items: this.cartItems,
        total: this.totalPrice
      });
      
      // Navigate to confirmation page
      this.router.navigate(['/confirmation']);
    }
  }

  onFormChange(): void {
    // This method is called whenever any form field changes
    // Can be used for real-time validation or other form handling
  }

  onCreditCardChange(event: any): void {
    // Remove any non-numeric characters
    const value = event.target.value.replace(/\D/g, '');
    this.creditCardNumber = value;
  }

  isFormValid(): boolean {
    return this.fullName.length >= 3 && 
           this.address.length >= 6 && 
           this.creditCardNumber.length >= 16;
  }
}
