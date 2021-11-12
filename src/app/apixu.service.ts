import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(
    private http: HttpClient
  ) { }

  getWeather(location : any){
    // return this.http.get(
    //     'http://api.openweathermap.org/data/2.5/forecast?q='+ location+'&appid= 254758e26ebe744dd0eedb7e9c61b956' 
    // );

      return this.http.get(
  'http://api.weatherstack.com/forecast? access_key = c5d1b463263d7a990d430bb9b61e1299& query =' + location
);

}

}
