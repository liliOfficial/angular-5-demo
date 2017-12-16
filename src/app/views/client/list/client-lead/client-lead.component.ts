import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClientService } from './../../../../services/client.service';

@Component({
  selector: 'client-lead',
  templateUrl: './client-lead.component.html',
  styleUrls: ['./client-lead.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientLeadComponent implements OnInit {
  // labels = ["Address","City","State","Country","Zip Code", "Interests"];
  // socialType = "Type";
  clients = [];
  constructor(service:ClientService) {
    this.clients = service.getLeadClients();
  }

  ngOnInit() {
  }

}
