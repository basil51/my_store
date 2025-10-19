# MyStore - Angular E-commerce Application

MyStore is a fully functional Angular e-commerce application that allows users to view a list of available products to purchase, add them to a shopping cart, and ultimately complete the checkout process.

## Features

- **Product Catalog**: Browse through a variety of products with images, descriptions, and prices
- **Product Details**: View detailed information about individual products
- **Shopping Cart**: Add, remove, and update quantities of products
- **Checkout Process**: Complete purchase with customer information form
- **Order Confirmation**: Receive confirmation after successful checkout
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Installation and Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm (Node Package Manager)
- Angular CLI

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/basil51/mystore.git
   cd mystore
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Launch the application**
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200` to view the application

## Project Structure

```
src/
├── app/
│   ├── components/          # Angular components
│   │   ├── cart/           # Shopping cart component
│   │   ├── checkout/       # Checkout form component
│   │   ├── confirmation/   # Order confirmation component
│   │   ├── product-item/   # Individual product component
│   │   ├── product-item-detail/ # Product details component
│   │   └── product-list/   # Product listing component
│   ├── layout/
│   │   └── header/         # Navigation header component
│   ├── models/             # TypeScript interfaces
│   ├── services/           # Angular services
│   └── assets/
│       └── data.json       # Product data
```

## Technologies Used

- **Angular 18**: Modern Angular framework with standalone components
- **TypeScript**: Type-safe JavaScript
- **RxJS**: Reactive programming for state management
- **CSS3**: Modern styling with responsive design
- **Angular Router**: Single-page application routing
- **Angular Forms**: Template-driven forms with validation

## Development

### Running the Development Server
```bash
ng serve
```

### Building for Production
```bash
ng build --prod
```

### Running Tests
```bash
ng test
```

## Application Flow

1. **Browse Products**: Users can view all available products on the main page
2. **View Details**: Click on any product to see detailed information
3. **Add to Cart**: Select quantity and add products to shopping cart
4. **Manage Cart**: View cart, update quantities, or remove items
5. **Checkout**: Fill out customer information form with validation
6. **Confirmation**: Receive order confirmation after successful purchase

## Contributing

This project was built as part of the Udacity Angular Fundamentals course. Feel free to fork and enhance the application with additional features.