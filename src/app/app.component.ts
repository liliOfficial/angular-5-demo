import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sidebarCollapsed = false;

  headerChanged(menuCollapsed) {
    this.sidebarCollapsed = menuCollapsed;
  }
  
  constructor(
    private translate:TranslateService,
    private authService: AuthService
  ) {
    // Translator init
    translate.addLangs(["en","cn"]);
    translate.setDefaultLang("en");
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'cn');
  }

  changeLanguage(lang) {
    console.log(lang);
    this.translate.use(lang);
  }
}
