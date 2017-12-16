import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RolesComponent implements OnInit {
  departments = ["Warehouse", "Sales", "Marketing", "Operation", "Supply Chain"];
  roleList = [
    {
      "id": 1,
      "role": "Administration",
      "parentId": 0,
      "hasChildren": true,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },
    {
      "id": 2,
      "role": "Roles",
      "parentId": 1,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },
    {
      "id": 3,
      "role": "Add Users",
      "parentId": 1,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },
    {
      "id": 4,
      "role": "Client",
      "parentId": 0,
      "hasChildren": true,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },
    {
      "id": 5,
      "role": "Leads",
      "parentId": 4,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },
    {
      "id": 6,
      "role": "Accounts",
      "parentId": 4,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },

    {
      "id": 7,
      "role": "Affiliate",
      "parentId": 4,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },
    {
      "id": 15,
      "role": "Sub Leads",
      "parentId": 4,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },
    {
      "id": 16,
      "role": "Sub Account",
      "parentId": 4,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },
    {
      "id": 17,
      "role": "Client Detail",
      "parentId": 4,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },
    {
      "id": 8,
      "role": "Task",
      "parentId": 0,
      "hasChildren": true,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },
    {
      "id": 9,
      "role": "Affiliate",
      "parentId": 8,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },
    {
      "id": 10,
      "role": "Document",
      "parentId": 8,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },
    {
      "id": 11,
      "role": "Affiliate Setting",
      "parentId": 0,
      "hasChildren": false,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },
    {
      "id": 12,
      "role": "Treasury",
      "parentId": 0,
      "hasChildren": true,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },
    {
      "id": 13,
      "role": "Treasury Task",
      "parentId": 12,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },
    {
      "id": 14,
      "role": "Treasury GateWay",
      "parentId": 12,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },
    {
      "id": 18,
      "role": "Treasury Exchange Rate",
      "parentId": 12,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },
    {
      "id": 19,
      "role": "Orders",
      "parentId": 0,
      "hasChildren": true,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },
    {
      "id": 20,
      "role": "Orders",
      "parentId": 19,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },
    {
      "id": 21,
      "role": "Pending Orders",
      "parentId": 19,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },
    {
      "id": 22,
      "role": "Dispatch Orders",
      "parentId": 19,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },
    {
      "id": 24,
      "role": "Marketing Material",
      "parentId": 0,
      "hasChildren": false,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },
    {
      "id": 25,
      "role": "Freight Setting",
      "parentId": 0,
      "hasChildren": true,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },
    {
      "id": 26,
      "role": "Freight Setting",
      "parentId": 25,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },
    {
      "id": 27,
      "role": "Freight Duty",
      "parentId": 25,
      "add": false,
      "delete": false,
      "edit": false,
      "view": false
    },


    
  ];

  roles = [
    {
      "no": "2",
      "department": "Back Office",
      "role": "Accountant",
      "permission": ["Treasury_Edit", "Treasury_View"]
    },
    {
      "no": "1",
      "department": "Operation",
      "role": "Admin",
      "permission": ["Roles_Edit", "Roles_View",]
    }
  ];

  groupCheck(sId, pId, value, option) {
    let list = this.roleList;
    if (pId == 0) {
      for (let i in list) {
        if (list[i].parentId == sId) {
          list[i][option] = value;
        }
      }
    } else {
      let parentValue = true;
      for (let i in list) {
        if (list[i].parentId == pId) {
          parentValue = parentValue && list[i][option];
        }
      }
      for (let i in list) {
        if (list[i].id == pId) {
          list[i][option] = parentValue;
        }
      }
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}
