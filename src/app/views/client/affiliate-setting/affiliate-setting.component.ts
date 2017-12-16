import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'affiliate-setting',
  templateUrl: './affiliate-setting.component.html',
  styleUrls: ['./affiliate-setting.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AffiliateSettingComponent implements OnInit {
  categories = [
    "Hot","Sale","Milk Powder","Health Care Products","Food","Body Products","Beauty"
  ]
  groups = [
    {"name":"Family","markup":"10%"},
    {"name":"Normal Clients","markup":"8%"},
    {"name":"VIP Clients","markup":"6%"},
    {"name":"VVIP Clients","markup":"5%"},
    {"name":"SVIP Clients","markup":"4%"},
  ];
  constructor() { }

  ngOnInit() {
  }

}
