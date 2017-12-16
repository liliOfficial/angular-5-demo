import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-freight-setting',
  templateUrl: './freight-setting.component.html',
  styleUrls: ['./freight-setting.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FreightSettingComponent implements OnInit {
  viewActive = "setting";

  freights = [
    {
      "name":"Standard",
      "cost":"5",
      "increment":"0.1",
      "minWeight":"1",
      "minCost":"5",
      "logistics":""
    },
    {
      "name":"Premium",
      "cost":"10",
      "increment":"1",
      "minWeight":"1",
      "minCost":"10",
      "logistics":""
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
