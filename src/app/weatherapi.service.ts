import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Weather } from './weather'


@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {
  API_URL ="http://api.openweathermap.org/data/2.5/weather?id=1269843&appid=c9911a176e6cf7e1ad698d24ed938843";
  POST_URL ="http://localhost:3000/employees";

  constructor(private http:HttpClient) { 
  }

  getWeatherReport(): Observable<any[]> {   
    const endpoint = this.API_URL ;
    return this.http.get<any>(endpoint,
        {
            headers: new HttpHeaders().set('Accept', 'aplication/json')
        });
  }

  getWeatherfromDB(){
      const weatherDB = this.POST_URL;
        return this.http.get<any>(weatherDB,
            {
                headers:new HttpHeaders().set('Accept','application/json')
            });
  }

  httpPostExample(weather) {
      console.log(weather);
    this.http.post("http://localhost:3000/employees",weather)
        .subscribe(
            (val) => {
                console.log("POST call successful value returned in body", val);
            },
            response => {
                console.log("POST call in error", response);
            },
            () => {
                console.log("Posted Data into DataBase.");
            });
    }
}


