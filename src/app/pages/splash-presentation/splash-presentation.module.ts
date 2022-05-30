import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplashPresentationPageRoutingModule } from './splash-presentation-routing.module';

import { SplashPresentationPage } from './splash-presentation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplashPresentationPageRoutingModule
  ],
  declarations: [SplashPresentationPage]
})
export class SplashPresentationPageModule {}
