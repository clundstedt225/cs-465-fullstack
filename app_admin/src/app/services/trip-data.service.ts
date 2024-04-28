import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root'
})

export class TripDataService {

  constructor(private http: HttpClient, @Inject(BROWSER_STORAGE) private storage: Storage) { }
  url = 'http://localhost:3000/api/trips';
  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips/`;

  /*
    addTrip(formData: Trip) : Observable<Trip> {
    return this.http.post<Trip>(this.url, formData);
  }

  updateTrip(formData: Trip) : Observable<Trip> {
    return this.http.put<Trip>(this.url + '/' + formData.code, formData);
  }

    getTrip(tripCode: string) : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url + '/' + tripCode);
  }

  getTrips() : Observable<Trip[]> { 
    return this.http.get<Trip[]>(this.url);
  }
  */

  addTrip(formData: Trip) : Observable<Trip> {
    return this.http.post<Trip>(this.url, formData);
  }

  updateTrip(formData: Trip) : Observable<Trip> {
    return this.http.put<Trip>(this.url + '/' + formData.code, formData);
  }

  getTrip(tripCode: string) : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url + '/' + tripCode);
  }

  getTrips() : Observable<Trip[]> { 
    return this.http.get<Trip[]>(this.url);
  }

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }

   private makeAuthApiCall(urlPath: string, user: User):
   Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
    .post(url, user)
    .toPromise()
    .then(response => response as AuthResponse) //response is JSON by default now, no need for .json()
    .catch(this.handleError);
   } 

   private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
   }
  
}



/*

   public getTrip(tripCode: string): Promise<Trip> {
    return this.http
                .get(this.tripUrl + tripCode)
                .toPromise()
                .then(response => response as Trip)
                .catch(this.handleError);
  }
  
  public getTrips(): Promise<Trip[]> { 
    return this.http
                .get(this.tripUrl)
                .toPromise()
                .then(response => response as Trip)
                .catch(this.handleError);
  }

  public updateTrip(formData: Trip): Promise<Trip> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem('travlr-token')}`
      })
    };
    console.log('Inside TripDataService updateTrip...');
    console.log(formData);
    return this.http
                .put(this.tripUrl + formData.code, formData, httpOptions)
                .toPromise()
                .then(response => response as Trip[])
                .catch(this.handleError);
  }

  public addTrip(formData: Trip): Promise<Trip> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem('travlr-token')}`
      })
    };
    console.log('Inside TripDataService addTrip...');
    console.log(formData);
    return this.http
                .post(this.tripUrl, formData, httpOptions)
                .toPromise()
                .then(response => response as Trip[])
                .catch(this.handleError);
  }
  
*/