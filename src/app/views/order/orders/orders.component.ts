import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OrderService } from './../../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrdersComponent implements OnInit {
  orders = [];

  constructor(service:OrderService) {
    this.orders = service.getOrders();
  }

  ngOnInit() {
  }

}
