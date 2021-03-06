import { Component, OnInit, Input, HostBinding, Output } from '@angular/core';
import { Product } from '../../model/product.model';


@Component({
  selector: 'app-product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css']
})
export class ProductDepartmentComponent implements OnInit {

  @Input() product: Product;
  
  constructor() { }

  ngOnInit() {
  }

}
