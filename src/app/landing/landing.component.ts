import { Component, OnInit } from '@angular/core';
import { SocketServiceService } from '../socket-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  fileCount:number

  constructor(public socketServiceService: SocketServiceService) { }

  ngOnInit() {
  //this.fileCount = this.socketServiceService.getFileCount()
  }

}
