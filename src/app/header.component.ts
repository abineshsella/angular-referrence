import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'header-app',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['EN', 'IT']);
    translate.setDefaultLang('EN');
    
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/EN|IT/) ? browserLang : 'EN');
  }

}
