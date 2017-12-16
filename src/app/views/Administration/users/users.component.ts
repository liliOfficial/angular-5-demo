import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {
  labels =["Username","Email","First Name", "Last Name", "Password"];
  roles = ["Accountant", "Admin"];
  departments = ["Back Office","Operation"];

  user = {
    "username":"Lily",
    "email":"li.li@zerologix.com",
    "firstName":"Li",
    "lastName":"Li",
    "password":"asdfjklp",
    "department":"",
    "role":"" 
  };
  constructor() { }

  ngOnInit() {
  }

}
