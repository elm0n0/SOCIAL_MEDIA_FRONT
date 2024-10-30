import { Component } from '@angular/core';
import { SharedTranslateModule } from '../../../shared/translate.module';

@Component({
  selector: 'home-form',
  standalone: true,
  imports: [SharedTranslateModule],
  templateUrl: './home-form.component.html',
  styleUrl: './home-form.component.scss',
})
export class HomeFormComponent {}
