import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  @Output() change = new EventEmitter();
  @Output() lang = new EventEmitter();

  menuShow = false;
  menuClick() {
    this.menuShow = !this.menuShow;
    this.change.emit(this.menuShow);
  }

  changeLanguage(lang) {
    
    this.lang.emit(lang);
  }

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

}
