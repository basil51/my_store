import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem } from '../../models/product.model';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;

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

  updateQuantity(productId: number, quantity: number): void {
    // Find the product name before updating
    const item = this.cartItems.find(item => item.product.id === productId);
    const productName = item ? item.product.name : 'Item';
    
    this.cartService.updateQuantity(productId, quantity);
    this.totalPrice = this.cartService.getTotalPrice();
    
    // Provide feedback if item was removed (quantity set to 0)
    if (quantity <= 0) {
      alert(`${productName} removed from cart!`);
    }
  }

  removeItem(productId: number): void {
    // Find the product name before removing
    const item = this.cartItems.find(item => item.product.id === productId);
    const productName = item ? item.product.name : 'Item';
    
    this.cartService.removeFromCart(productId);
    this.totalPrice = this.cartService.getTotalPrice();
    
    // Provide feedback to user
    alert(`${productName} removed from cart!`);
  }

  proceedToCheckout(): void {
    this.router.navigate(['/checkout']);
  }

  continueShopping(): void {
    this.router.navigate(['/']);
  }
}
