import { Component, OnInit } from '@angular/core';
import { Share } from '@capacitor/share';//shaRE APP


@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {

  constructor() { }

  ngOnInit() {
    
      
  }


  share()
  {
    console.log("compartir");
     Share.share({
      title: 'Prestamos Imediatos',
      text: 'Algo realmente increíble que necesitas ver,credito instantaneo',
      url: 'https://baulprogram.com.mx/',
      dialogTitle: 'Compartir con Amigos',
    });
  }



}
