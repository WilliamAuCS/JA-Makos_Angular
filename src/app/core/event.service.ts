import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = "http://localhost:3000/api/events";
  private _specialEventsUrl = "http://localhost:3000/api/special";

  constructor(private http: HttpClient) { }

  // Returns array of Events
  getEvents() {
    return this.http.get<any>(this._eventsUrl);
  }

  // Returns array of SpecialEvents
  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl);
  }
}
