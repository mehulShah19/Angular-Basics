import { Component } from '@angular/core';
import {Product} from '../model/product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products : Product[];
  people = [];


  title = 'app';
  constructor() {
    this.products = [
        new Product(
          'MYSHOES',
          'Black Running Shoes', '/assets/images/products/black-shoes.jpg', ['Men', 'Shoes', 'Running Shoes'], 109.99),
        new Product(
          'NEATOJACKET',
          'Blue Jacket', '/assets/images/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99),
        new Product(
          'NICEHAT',
          'A Nice Black Hat', '/assets/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'], 29.99)
    ];

  this.people = [
{ name: 'Anderson', age: 35, city: 'Sao Paulo' },
{ name: 'John', age: 12, city: 'Miami' },
{ name: 'Peter', age: 22, city: 'New York' }];

 }


  productWasSelected(product : Product): void {
    console.log("Product Clicked: " , product);

  }



  //For each sample






}
