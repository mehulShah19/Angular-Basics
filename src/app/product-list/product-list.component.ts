import { Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import {Product} from '../../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    @Input() productList : Product[];
    @Output() onProductSelected : EventEmitter<Product>;

    private currentProduct:Product;

  constructor() {
      this.onProductSelected = new EventEmitter();
   }

isSelected(product: Product): boolean {
  if (!product || !this.currentProduct) {
      return false; }

    return product.sku === this.currentProduct.sku;
  }

clicked(product: Product): void {
  this.currentProduct = product;
  this.onProductSelected.emit(product);
}

  ngOnInit() {
  }

}