import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-product-item-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-item-detail.html',
  styleUrl: './product-item-detail.css'
})
export class ProductItemDetailComponent implements OnInit {
  product: Product | undefined;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProduct(+productId).subscribe(product => {
        this.product = product;
      });
    }
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product, this.quantity);
      alert(`${this.product.name} added to cart!`);
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
