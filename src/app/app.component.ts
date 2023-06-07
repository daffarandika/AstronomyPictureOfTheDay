import { Component } from '@angular/core';
import { env } from 'src/environment/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AstronomyPictureOfTheDay';
  key = env.key
}
