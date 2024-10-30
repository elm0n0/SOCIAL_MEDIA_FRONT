import { Component } from '@angular/core';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'home-header',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss',
})
export class HomeHeaderComponent {}
