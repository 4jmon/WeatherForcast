import { Component,OnInit } from '@angular/core';
import {Weather} from '../model/weather';
import {FormsModule} from '@angular/forms'

import {DataService} from './service/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
title="24 hours weather forecust";
city:string;
myWeather= []; 

constructor(private dservice:DataService){
	console.log("dataservice ran!")
}
  ngOnInit(){
//  	this.myWeather.push(new Weather("London, UK", "12 c","16 c","13 c","10 c"));
this.city = "";
  	
  }

searchWeather(t:string){
	this.city  =t;
	console.log("Weather is being searched for "+this.city);
	console.log(this.city);
	this.dservice.getWetherData(this.city).subscribe((res)=>{
		console.log(JSON.stringify(res));
		let midday = (parseInt(res.list[0].main.temp)-273).toString() + "   C"; //according to the json
		let evening = (parseInt(res.list[2].main.temp)-273).toString() + "   C"; // acording to the json
		let midnight = (parseInt(res.list[6].main.temp)-273).toString() + "   C"; // acording to the json
		let morning = (parseInt(res.list[6].main.temp)-273).toString() + "   C"; // acording to the json
		this.myWeather.push(new Weather(this.city,midnight,morning,midday,evening));
		
		//console.log(res.list[0].main.temp);
	});


}
}
