import { Component } from '@angular/core';
import { TrackData } from 'src/app/Models/track-data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  trackInterface:TrackData={
    trackName:"MERN trace",
    trackNumber:5,
    courses:[
      "js","mondo","nodejs","angular","react"
    ]
  }

}
