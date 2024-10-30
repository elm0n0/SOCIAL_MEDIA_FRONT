import { Component } from '@angular/core';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HomeFormComponent } from './home-form/home-form.component';

@Component({
  selector: 'home-main',
  standalone: true,
  imports: [HomeCarouselComponent, HomeFormComponent],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss',
})
export class HomeMainComponent {}
