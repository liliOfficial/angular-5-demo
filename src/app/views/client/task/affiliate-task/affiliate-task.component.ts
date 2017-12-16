import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'affiliate-task',
  templateUrl: './affiliate-task.component.html',
  styleUrls: ['./affiliate-task.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AffiliateTaskComponent implements OnInit {
  clients = [
    {
      "no":"2",
      "clientId": "C16545",
      "name": "zhangsan",
      "phone": "0405000000",
      "address": "12 Help Street, Chatswood, NSW, 2500",
      "email": "zhangsan@zerologix.com",
      "group": "fammily",
      "status": "Pending",
      "photoIdNo": "100206198801010011",
      "idImage1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmo5KTrQ5fczNNBcTfk5Z9tZpFKJmXF3iCXOLySRJ2M3LFcU_TMw",
      "idImage2": "http://img2.wikia.nocookie.net/__cb20141105011916/the-binding-of-isaac-rebirth-fr/fr/images/5/50/Wiki-background"
    },
    {
      "no":"3",
      "clientId": "C16545",
      "name": "zhangsan",
      "phone": "0405000000",
      "address": "12 Help Street, Chatswood, NSW, 2500",
      "email": "zhangsan@zerologix.com",
      "group": "fammily",
      "status": "Approve",
      "photoIdNo": "100206198801010011",
      "idImage1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmo5KTrQ5fczNNBcTfk5Z9tZpFKJmXF3iCXOLySRJ2M3LFcU_TMw",
      "idImage2": "http://img2.wikia.nocookie.net/__cb20141105011916/the-binding-of-isaac-rebirth-fr/fr/images/5/50/Wiki-background",
    },
    {
      "no":"4",
      "clientId": "C16545",
      "name": "zhangsan",
      "phone": "0405000000",
      "address": "12 Help Street, Chatswood, NSW, 2500",
      "email": "zhangsan@zerologix.com",
      "group": "fammily",
      "status": "Reject",
      "photoIdNo": "100206198801010011",
      "idImage1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmo5KTrQ5fczNNBcTfk5Z9tZpFKJmXF3iCXOLySRJ2M3LFcU_TMw",
      "idImage2": "http://img2.wikia.nocookie.net/__cb20141105011916/the-binding-of-isaac-rebirth-fr/fr/images/5/50/Wiki-background"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
