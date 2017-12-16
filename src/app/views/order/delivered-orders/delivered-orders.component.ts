import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OrderService } from './../../../services/order.service';

@Component({
  selector: 'app-delivered-orders',
  templateUrl: './delivered-orders.component.html',
  styleUrls: ['./delivered-orders.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeliveredOrdersComponent implements OnInit {
  orders = [];
  
  constructor(service: OrderService) {
    this.orders = service.getDeliveredOrders();
  }

  ngOnInit() {
  }

}
