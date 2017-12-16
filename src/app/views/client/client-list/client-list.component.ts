import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClientService } from './../../../services/client.service';

@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientListComponent implements OnInit {
  clients = [];

  constructor(service:ClientService) {
    this.clients = service.getClients();
  }

  ngOnInit() {
  }

}
