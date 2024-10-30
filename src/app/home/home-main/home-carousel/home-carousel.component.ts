import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselSlide } from './home-carousel-slide';

@Component({
  selector: 'home-carousel',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss',
})
export class HomeCarouselComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  carouselSlides: CarouselSlide[] = [
    {
      imageUrl: 'https://picsum.photos/id/944/900/500',
      altText: 'img1',
      title: 'img1 title',
      description: 'img1 description',
    },
    {
      imageUrl: 'https://picsum.photos/id/1011/900/500',
      altText: 'img2',
      title: 'img2 title',
      description: 'img2 description',
    },
    {
      imageUrl: 'https://picsum.photos/id/984/900/500',
      altText: 'img2',
      title: 'img2 title',
      description: 'img2 description',
    },
  ];
}
