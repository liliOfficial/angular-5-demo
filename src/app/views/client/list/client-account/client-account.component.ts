import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClientService } from './../../../../services/client.service';

@Component({
  selector: 'client-account',
  templateUrl: './client-account.component.html',
  styleUrls: ['./client-account.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientAccountComponent implements OnInit {
  clients = [];
  constructor(service:ClientService) {
    this.clients = service.getAccountClients();
   }

  ngOnInit() {
  }

}
