import { Component, OnInit, Input, HostBinding, Output } from '@angular/core';

@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent implements OnInit {

   @Input() price: number;
  constructor() { }

  ngOnInit() {
  }

}
