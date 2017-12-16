import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MaterialListComponent implements OnInit {
  materials = [
    {
      "id":1,
      "priority": 1,
      "classification": "解决方案",
      "title": "解决方案A",
      "description": "sdkfjsldkfj sdkjf dslf lsdkjf dlsk sdfdsf"
    },
    {
      "id":2,
      "priority": 1,
      "classification": "解决方案",
      "title": "解决方案A",
      "description": "sdkfjsldkfj sdkjf dslf lsdkjf dlsk sdfdsf"
    },
    {
      "id":3,
      "priority": 1,
      "classification": "解决方案",
      "title": "解决方案A",
      "description": "sdkfjsldkfj sdkjf dslf lsdkjf dlsk sdfdsf"
    },
    {
      "id":4,
      "priority": 1,
      "classification": "解决方案",
      "title": "解决方案A",
      "description": "sdkfjsldkfj sdkjf dslf lsdkjf dlsk sdfdsf"
    },
    {
      "id":5,
      "priority": 1,
      "classification": "解决方案",
      "title": "解决方案A",
      "description": "sdkfjsldkfj sdkjf dslf lsdkjf dlsk sdfdsf"
    },
    {
      "id":6,
      "priority": 1,
      "classification": "解决方案",
      "title": "解决方案A",
      "description": "sdkfjsldkfj sdkjf dslf lsdkjf dlsk sdfdsf"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
