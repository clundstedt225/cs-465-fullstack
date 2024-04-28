import { Component } from '@angular/core'; //CUSTOM_ELEMENTS_SCHEMA
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing.component';

@Component({
  selector: 'app-root',
  //standalone: true,
  //imports: [CommonModule, RouterOutlet, TripListingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  //schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppComponent {
  title = 'Travlr Getaways Admin!';
}
