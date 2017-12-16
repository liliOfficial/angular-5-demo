import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClientService } from './../../../../services/client.service';

@Component({
  selector: 'app-client-sublead',
  templateUrl: './client-sublead.component.html',
  styleUrls: ['./client-sublead.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientSubleadComponent implements OnInit {
  clients = [];
  constructor(service:ClientService) {
    this.clients = service.getSubleadClients();
   }

  ngOnInit() {
  }

}
