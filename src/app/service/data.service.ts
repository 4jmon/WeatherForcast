import { Injectable } from '@angular/core';
import {Http,HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(public http:Http) {
  		console.log("Data service connected!");
   }

   getWetherData(city:string){
   	let headers = new Headers();
   	return this.http.get('http://samples.openweathermap.org/data/2.5/forecast?q='+city+"&appid=b6907d289e10d714a6e88b30761fae22")
   	.map(res => res.json());
   }

}
