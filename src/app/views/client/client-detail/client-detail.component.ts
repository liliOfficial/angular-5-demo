import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClientService } from './../../../services/client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientDetailComponent implements OnInit {

  viewActive = "info";
  orderHistoryActive = "retail";
  accountActive = "lead";

  client = {};
  orders = [];

  orderInfo = {};

  retailOrderInfo = {
    "mostBought": "Milk",
    "totalSpending": 5000,
    "totalProfits": 2000
  };

  affiliateOrderInfo = {};

  retailOrders = [];
  affiliateOrders = [];

  subLeads = [];
  subAccounts = [];

  clients = [];

  activeRetail() {
    this.orders = this.retailOrders
    this.orderHistoryActive = "retail";
  }

  activeAffiliate() {
    this.orders = this.affiliateOrders;
    this.orderHistoryActive = "affiliate";
  }

  activeLead() {
    this.clients = this.subLeads;
    this.accountActive = "lead";
  }

  activeAccount() {
    this.clients = this.subAccounts;
    this.accountActive = "account";
  }

  constructor(service: ClientService) {
    this.client = service.getClientDetail();
    this.retailOrders = service.getRetailOrders();
    this.affiliateOrders = service.getAffiliateOrders();
    this.orders = this.retailOrders;
    this.subLeads = service.getDetailSubleads();
    this.clients = this.subLeads;
    this.subAccounts = service.getDetailAccount();
  }

  ngOnInit() {
  }

}
