import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShareButtons } from 'ngx-sharebuttons/buttons'; // Import the ShareButtons component
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShareButtons, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'share-buttons-fb';
}
