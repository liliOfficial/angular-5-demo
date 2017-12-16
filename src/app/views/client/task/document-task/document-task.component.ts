import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-document-task',
  templateUrl: './document-task.component.html',
  styleUrls: ['./document-task.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DocumentTaskComponent implements OnInit {
  documents = [
    {
      "no": "4",
      "clientId": "C16545",
      "name": "Zhang San",
      "createTime": "2017-10-30 14:35:17",
      "idNo": "120101199901010011",
      "idImage1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmo5KTrQ5fczNNBcTfk5Z9tZpFKJmXF3iCXOLySRJ2M3LFcU_TMw",
      "idImage2": "http://img2.wikia.nocookie.net/__cb20141105011916/the-binding-of-isaac-rebirth-fr/fr/images/5/50/Wiki-background",
      "status": "reject",
      "rejectReason":"",
      "admin": "Auto"
    },
    {
      "no": "3",
      "clientId": "C16545",
      "name": "Zhang San",
      "createTime": "2017-10-30 14:35:17",
      "idNo": "120101199901010011",
      "idImage1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmo5KTrQ5fczNNBcTfk5Z9tZpFKJmXF3iCXOLySRJ2M3LFcU_TMw",
      "idImage2": "http://img2.wikia.nocookie.net/__cb20141105011916/the-binding-of-isaac-rebirth-fr/fr/images/5/50/Wiki-background",
      "status": "pending",
      "admin": ""
    },
    {
      "no": "2",
      "clientId": "C16545",
      "name": "Zhang San",
      "createTime": "2017-10-30 14:35:17",
      "idNo": "120101199901010011",
      "idImage1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmo5KTrQ5fczNNBcTfk5Z9tZpFKJmXF3iCXOLySRJ2M3LFcU_TMw",
      "idImage2": "http://img2.wikia.nocookie.net/__cb20141105011916/the-binding-of-isaac-rebirth-fr/fr/images/5/50/Wiki-background",
      "status": "approve",
      "admin": "Auto"
    },
    {
      "no": "1",
      "clientId": "C16545",
      "name": "Zhang San",
      "createTime": "2017-10-30 14:35:17",
      "idNo": "120101199901010011",
      "idImage1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmo5KTrQ5fczNNBcTfk5Z9tZpFKJmXF3iCXOLySRJ2M3LFcU_TMw",
      "idImage2": "http://img2.wikia.nocookie.net/__cb20141105011916/the-binding-of-isaac-rebirth-fr/fr/images/5/50/Wiki-background",
      "status": "reject",
      "rejectReason":"",
      "admin": "Auto",
      "sentEmail":true
    },
  ];

  rejectReasons = ["正面错误","反面错误","正反面均有错误"];
  constructor() { }

  ngOnInit() {
  }

}
