import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClientService } from './../../../../services/client.service';

@Component({
  selector: 'client-subaccount',
  templateUrl: './client-subaccount.component.html',
  styleUrls: ['./client-subaccount.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientSubaccountComponent implements OnInit {
  clients = [];
  constructor(service:ClientService) {
    this.clients = service.getSubaccountClients();
  }

  ngOnInit() {
  }

}
