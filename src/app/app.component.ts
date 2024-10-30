import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(ngbConfig: NgbConfig) {
    ngbConfig.animation = false;
  }
  title = 'SOCIAL_MEDIA_FRONT';
}
