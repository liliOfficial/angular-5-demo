import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-treasury-setting',
  templateUrl: './treasury-setting.component.html',
  styleUrls: ['./treasury-setting.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TreasurySettingComponent implements OnInit {
  viewActive = "gateway";
  editable = false;


  gateWays = [
    {
      "name":"Union",
      "chineseName": "银联",
      "provider":"",
      "code":"",
      "account":"",
      "inmlementDate":"",
      "status":true
    },
    {
      "name":"Ali Pay",
      "chineseName": "支付宝",
      "provider":"",
      "code":"",
      "account":"",
      "inmlementDate":"",
      "status":false
    }
  ];

  gateWaysO = [
    {
      "name":"Union",
      "chineseName": "银联",
      "provider":"",
      "code":"",
      "account":"",
      "inmlementDate":"",
      "status":true
    },
    {
      "name":"Ali Pay",
      "chineseName": "支付宝",
      "provider":"",
      "code":"",
      "account":"",
      "inmlementDate":"",
      "status":false
    }
  ];


  cancel () {
    this.gateWays = this.gateWaysO;
    this.editable = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
