import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-client-order',
  templateUrl: './client-order.component.html',
  styleUrls: ['./client-order.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientOrderComponent implements OnInit {

  chooseProduct = false;
  rightBar = false;
  orders = [
    {
      "picture": "https://d3r2zleywq7959.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/1/216_xlarge_1.jpg",
      "productId":"P131554",
      "productName":"Fish Oil",
      "currentQuantity":"20",
      "lastUpdated":"25/10/2017 17:44:40",
      "totalValue":"500",
      "unitPrice":"20",
      "recommendedPrice":"25",
      "categroy":"Health Care",
      "Quantity":"",
      "orderedQuantity":"7"
    },
    {
      "picture": "https://www.aptanutrition.com.au/img/bg/range-hero-multiple.png",
      "productId":"P131554",
      "productName":"Aptamil",
      "currentQuantity":"20",
      "lastUpdated":"25/10/2017 17:44:40",
      "totalValue":"500",
      "unitPrice":"20",
      "recommendedPrice":"25",
      "categroy":"Health Care",
      "orderedQuantity":"0"
    },
    {
      "picture": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Blue_Tiger_Im_IMG_9450.jpg",
      "productId":"P131554",
      "productName":"鱼油",
      "currentQuantity":"20",
      "lastUpdated":"25/10/2017 17:44:40",
      "totalValue":"500",
      "unitPrice":"20",
      "recommendedPrice":"25",
      "categroy":"Health Care",
      "orderedQuantity":"0"
    }
  ];

  clients = [
    {
      "name": "zhangsan",
      "phone": "0405000000",
      "address": "12 Help Street, Chatswood, NSW, 2500",
      "email": "zhangsan@zerologix.com",
      "idImage1":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmo5KTrQ5fczNNBcTfk5Z9tZpFKJmXF3iCXOLySRJ2M3LFcU_TMw",
      "idImage2":"http://img2.wikia.nocookie.net/__cb20141105011916/the-binding-of-isaac-rebirth-fr/fr/images/5/50/Wiki-background",
      "group": "fammily",
      "socialIdType":"QQ",
      "socialId":"45458796"
    },
    {
      "name": "zhangsan",
      "phone": "0405000000",
      "address": "12 Help Street, Chatswood, NSW, 2500",
      "email": "zhangsan@zerologix.com",
      "idImage1":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmo5KTrQ5fczNNBcTfk5Z9tZpFKJmXF3iCXOLySRJ2M3LFcU_TMw",
      "idImage2":"http://img2.wikia.nocookie.net/__cb20141105011916/the-binding-of-isaac-rebirth-fr/fr/images/5/50/Wiki-background",
      "group": "fammily",
      "socialIdType":"QQ",
      "socialId":"45458796"
    },
    {
      "name": "zhangsan",
      "phone": "0405000000",
      "address": "12 Help Street, Chatswood, NSW, 2500",
      "email": "zhangsan@zerologix.com",
      "idImage1":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmo5KTrQ5fczNNBcTfk5Z9tZpFKJmXF3iCXOLySRJ2M3LFcU_TMw",
      "idImage2":"http://img2.wikia.nocookie.net/__cb20141105011916/the-binding-of-isaac-rebirth-fr/fr/images/5/50/Wiki-background",
      "group": "fammily",
      "socialIdType":"QQ",
      "socialId":"45458796"
    }
  ];

  orderedProducts = [
    {
      "picture": "https://d3r2zleywq7959.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/1/216_xlarge_1.jpg",
      "productName":"Fish Oil",
      "Quantity":"20",
      "unitPrice":"20",
      "orderedQuantity":"7"
    },
    {
      "picture": "https://www.aptanutrition.com.au/img/bg/range-hero-multiple.png",
      "productName":"Aptamil",
      "Quantity":"40",
      "unitPrice":"20",
      "orderedQuantity":"8"
    }
  ];
  changeClient(){
    this.chooseProduct = false;
    this.rightBar = false;
  }
  chosenClient(){
    this.chooseProduct = true;
  }
  order() {
    
  }
  constructor() { }

  ngOnInit() {
  }

}
