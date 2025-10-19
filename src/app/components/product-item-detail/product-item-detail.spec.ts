import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemDetail } from './product-item-detail';

describe('ProductItemDetail', () => {
  let component: ProductItemDetail;
  let fixture: ComponentFixture<ProductItemDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductItemDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductItemDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
