import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OrderService } from './../../../services/order.service';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PendingOrdersComponent implements OnInit {
  orders = [];
  constructor(service: OrderService) {
    this.orders = service.getPendingOrders();
  }

  ngOnInit() {
  }

}
