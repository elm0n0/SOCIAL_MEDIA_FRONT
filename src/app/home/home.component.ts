import { Component } from '@angular/core';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeaderComponent, HomeMainComponent, HomeFooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
