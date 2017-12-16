import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClientService } from './../../../../services/client.service';

@Component({
  selector: 'app-client-affiliate',
  templateUrl: './client-affiliate.component.html',
  styleUrls: ['./client-affiliate.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientAffiliateComponent implements OnInit {

  clients = [];

  constructor(service: ClientService) {
    this.clients = service.getAffiliateClients();
  }

  ngOnInit() {
  }

}
