import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-confirmation',
  imports: [CommonModule],
  templateUrl: './confirmation.html',
  styleUrl: './confirmation.css'
})
export class ConfirmationComponent implements OnInit {
  totalPrice: number = 0;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.totalPrice = this.cartService.getTotalPrice();
    // Clear the cart after showing confirmation
    this.cartService.clearCart();
  }

  continueShopping(): void {
    this.router.navigate(['/']);
  }
}
