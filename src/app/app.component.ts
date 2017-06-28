import { Component } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { SocketServiceService } from './socket-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  

  public options = {
    position: ["bottom", "left"],
    timeOut: 5000,
    lastOnBottom: true
  };

  constructor(private _service: NotificationsService, private socketservice: SocketServiceService) {


  }


 

}
