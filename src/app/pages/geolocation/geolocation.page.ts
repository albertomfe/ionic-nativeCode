import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';




@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {

  constructor() { }



  ngOnInit() {


    const printCurrentPosition = async () => {
      const coordinates = await Geolocation.getCurrentPosition();
    
      console.log('Current position:', coordinates);
    };
    printCurrentPosition();

  }

}
