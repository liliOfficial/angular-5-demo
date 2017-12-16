import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'treasury',
  templateUrl: './treasury.component.html',
  styleUrls: ['./treasury.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TreasuryComponent implements OnInit {
  treasuries = [
    {
      "clientId": "C16545",
      "affiliateId": "",
      "affiliated": "A1257",
      "name": "zhangsan",
      "email": "zhangsan@zerologix.com",
      "orderNo":"O1545646",
      "paymentMethod":"Master Card",
      "paymentCode":"026325",
      "paymentAmount":"419",
      "currency":"RMB",
      "admin":"aaa",
      "status":"pending",
      "comment":" Having trouble with alcohol? Does your drinking worry you? Is it causing you to get into unpleasant or dangerous situations?"
    },
    {
      "clientId": "C16545",
      "affiliateId": "A1257",
      "affiliated": "",
      "name": "zhangsan",
      "email": "zhangsan@zerologix.com",
      "orderNo":"O1545646",
      "paymentMethod":"Visa Card",
      "paymentCode":"026325",
      "paymentAmount":"419",
      "currency":"RMB",
      "admin":"aaa",
      "status":"approved",
      "comment":"NSW Weather & Warnings · Warnings Summary · Forecasts · Sydney Forecast · NSW Forecast Area Map"
    },
    {
      "clientId": "C16545",
      "affiliateId": "A1257",
      "affiliated": "",
      "name": "zhangsan",
      "email": "zhangsan@zerologix.com",
      "orderNo":"O1545646",
      "paymentMethod":"Master Card",
      "paymentCode":"026325",
      "paymentAmount":"419",
      "currency":"AUD",
      "admin":"aaa",
      "status":"pending",
      "comment":""
    },
    {
      "clientId": "C16545",
      "affiliateId": "A1257",
      "affiliated": "",
      "name": "zhangsan",
      "email": "zhangsan@zerologix.com",
      "orderNo":"O1545646",
      "paymentMethod":"Visa Card",
      "paymentCode":"026325",
      "paymentAmount":"419",
      "currency":"RMB",
      "admin":"aaa",
      "status":"pending",
      "comment":"Something Something"
    },
    {
      "clientId": "C16545",
      "affiliateId": "",
      "affiliated": "A1257",
      "name": "zhangsan",
      "email": "zhangsan@zerologix.com",
      "orderNo":"O1545646",
      "paymentMethod":"Master Card",
      "paymentCode":"026325",
      "paymentAmount":"419",
      "currency":"RMB",
      "admin":"aaa",
      "status":"pending",
      "comment":"Something Something"
    },
    {
      "clientId": "C16545",
      "affiliateId": "A1257",
      "affiliated": "",
      "name": "zhangsan",
      "email": "zhangsan@zerologix.com",
      "orderNo":"O1545646",
      "paymentMethod":"Master Card",
      "paymentCode":"026325",
      "paymentAmount":"419",
      "currency":"AUD",
      "admin":"aaa",
      "status":"pending",
      "comment":"Something Something"
    },
    {
      "clientId": "C16545",
      "affiliateId": "",
      "affiliated": "A1257",
      "name": "zhangsan",
      "email": "zhangsan@zerologix.com",
      "orderNo":"O1545646",
      "paymentMethod":"Master Card",
      "paymentCode":"026325",
      "paymentAmount":"419",
      "currency":"RMB",
      "admin":"aaa",
      "status":"pending",
      "comment":"Something Something"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
