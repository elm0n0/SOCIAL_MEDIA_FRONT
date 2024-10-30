import { Component } from '@angular/core';
import { HomeComponent } from '../home.component';
import { SharedTranslateModule } from '../../shared/translate.module';
import { TranslateService } from '@ngx-translate/core';
import { homeLanguageIcon } from './home-language-icon';

@Component({
  selector: 'home-header',
  standalone: true,
  imports: [HomeComponent, SharedTranslateModule],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss',
})
export class HomeHeaderComponent {

  currentLanguage = 'es';

  homeLanguageIcon: homeLanguageIcon[] = [
    {
      src:"spain-ico.svg",
      alt:"spain-ico.svg",
    },
    {
      src:"england-ico.svg",
      alt:"england.svg",
    },
  ];

  currentIcon = this.homeLanguageIcon[0];

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.currentLanguage);
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'es' ? 'en' : 'es';
    this.currentIcon = this.currentLanguage === 'es' ? this.homeLanguageIcon[0] : this.homeLanguageIcon[1]
    this.translate.use(this.currentLanguage);
  }

}
