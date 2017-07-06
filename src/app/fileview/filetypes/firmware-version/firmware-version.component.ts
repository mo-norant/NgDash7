import { Component, OnInit } from '@angular/core';
import { SocketServiceService } from '../../../socket-service.service'
@Component({
  selector: 'app-firmware-version',
  templateUrl: './firmware-version.component.html',
  styleUrls: ['./firmware-version.component.css']
})
export class FirmwareVersionComponent implements OnInit {

  filedata
  constructor(private socketservice: SocketServiceService) {

    console.log(this.filedata)

   }

  ngOnInit() {
    
  }

}
