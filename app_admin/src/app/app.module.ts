import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Assuming you have an 'AppComponent'
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { AddTripComponent } from './add-trip/add-trip.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TripDataService } from './services/trip-data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TripListingComponent,
    TripCardComponent,
    AddTripComponent,
    EditTripComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
    //RouterLink,
    //RouterOutlet,
    //RouterLinkActive
    //RouterTestingModule
    // Other modules (e.g., HttpClientModule, FormsModule, etc.)
  ],
  providers: [TripDataService],
  bootstrap: [AppComponent], // The component to bootstrap
})

export class AppModule { }