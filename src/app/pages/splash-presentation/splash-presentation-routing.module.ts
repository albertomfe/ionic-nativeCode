import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashPresentationPage } from './splash-presentation.page';

const routes: Routes = [
  {
    path: '',
    component: SplashPresentationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplashPresentationPageRoutingModule {}
