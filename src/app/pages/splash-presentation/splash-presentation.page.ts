import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';//splash


@Component({
  selector: 'app-splash-presentation',
  templateUrl: './splash-presentation.page.html',
  styleUrls: ['./splash-presentation.page.scss'],
})
export class SplashPresentationPage implements OnInit {

  constructor() { }

  ngOnInit() {
    SplashScreen.show({
      showDuration: 2000,
      autoHide: true
    });
  }




}
