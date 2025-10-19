import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail';
import { CartComponent } from './components/cart/cart';
import { CheckoutComponent } from './components/checkout/checkout';
import { ConfirmationComponent } from './components/confirmation/confirmation';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/:id', component: ProductItemDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: '**', redirectTo: '' }
];
