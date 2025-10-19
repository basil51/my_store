import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<{product: Product, quantity: number}>();

  quantity: number = 1;

  onQuantityChange(): void {
    // This method is called whenever the quantity input changes
    // Can be used for validation or other quantity-related logic
  }

  onAddToCart(): void {
    this.addToCart.emit({product: this.product, quantity: this.quantity});
  }
}
