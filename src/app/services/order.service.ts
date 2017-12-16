import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {
  getDeliveredOrders() {
    return [
      {
        "no": 3,
        "receiverClientId": "C16545",
        "senderClientId": "C165777",
        "orderNo": "O65416164",
        "invoiceNo": "BK13515341",
        "createdDate": "27/11/2017",
        "sender": "Zhang San",
        "receiver": "Wang Wu",
        "address": "12 Help Street, Chatswood, NSW 2065",
        "logistics": "EMS",
        "status": "Packed"
      },
      {
        "no": 2,
        "receiverClientId": "C16545",
        "senderClientId": "C165777",
        "orderNo": "O65416164",
        "invoiceNo": "BK13515341",
        "createdDate": "27/11/2017",
        "sender": "Zhang San",
        "receiver": "Wang Wu",
        "address": "12 Help Street, Chatswood, NSW 2065",
        "logistics": "EMS",
        "status": "Packed"
      },
      {
        "no": 1,
        "receiverClientId": "C16545",
        "senderClientId": "C165777",
        "orderNo": "O65416164",
        "invoiceNo": "BK13515341",
        "createdDate": "27/11/2017",
        "sender": "Li Si",
        "receiver": "Wang Wu",
        "address": "12 Help Street, Chatswood, NSW 2065",
        "logistics": "EMS",
        "status": "Packed"
      }
    ];
  }

  getPendingOrders() {
    return [
      {
        "no": 5,
        "receiverClientId": "C16545",
        "senderClientId": "C165777",
        "orderNo": "O65416164",
        "invoiceNo": "BK13515341",
        "createdDate": "27/11/2017",
        "deliveryTime": "28/11/2017",
        "sender": "Zhang San",
        "receiver": "Wang Wu",
        "address": "12 Help Street, Chatswood, NSW 2065",
        "logistics":"ems"
      },
      {
        "no": 4,
        "receiverClientId": "C16545",
        "senderClientId": "C165777",
        "orderNo": "O65416164",
        "invoiceNo": "BK13515341",
        "createdDate": "27/11/2017",
        "deliveryTime": "28/11/2017",
        "sender": "Zhang San",
        "receiver": "Wang Wu",
        "address": "12 Help Street, Chatswood, NSW 2065",
        "logistics":"ems"
      },
      {
        "no": 3,
        "receiverClientId": "C16545",
        "senderClientId": "C165777",
        "orderNo": "O65416164",
        "invoiceNo": "BK13515341",
        "createdDate": "27/11/2017",
        "deliveryTime": "28/11/2017",
        "sender": "Zhang San",
        "receiver": "Wang Wu",
        "address": "12 Help Street, Chatswood, NSW 2065",
        "logistics":"ems"
      },
      {
        "no": 2,
        "receiverClientId": "C16545",
        "senderClientId": "C165777",
        "orderNo": "O65416164",
        "invoiceNo": "BK13515341",
        "createdDate": "27/11/2017",
        "deliveryTime": "28/11/2017",
        "sender": "Zhang San",
        "receiver": "Wang Wu",
        "address": "12 Help Street, Chatswood, NSW 2065",
        "logistics":"ems"
      },
      {
        "no": 1,
        "receiverClientId": "C16545",
        "senderClientId": "C165777",
        "orderNo": "O65416164",
        "invoiceNo": "BK13515341",
        "createdDate": "27/11/2017",
        "deliveryTime": "28/11/2017",
        "sender": "Li Si",
        "receiver": "Wang Wu",
        "address": "12 Help Street, Chatswood, NSW 2065",
        "logistics":""
      }
    ]
  }

  getOrders() {
    return [
      {
        "no":2,
        "receiverClientId":"C16545",
        "senderClientId":"C165777",
        "orderNo":"O65416164",
        "trackingNo":"BK13515341",
        "createdDate":"27/11/2017",
        "sender":"Zhang San",
        "receiver":"Wang Wu",
        "address": "12 Help Street, Chatswood, NSW 2065",        
        "status":"Packing",
        "processor":"Amy"
      },
      {
        "no":1,
        "receiverClientId":"C16545",
        "orderNo":"O65416164",
        "trackingNo":"BK13515341",
        "createdDate":"27/11/2017",
        "sender":"Li Si",
        "receiver":"Wang Wu",
        "address": "12 Help Street, Chatswood, NSW 2065",        
        "status":"Picking",
        "processor":"Ben"
      }
    ]
  }
  constructor() { }

}
