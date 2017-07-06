import { Component, OnInit } from '@angular/core';
import {SocketServiceService} from "../socket-service.service";

@Component({
  selector: 'app-alpcommands',
  templateUrl: './alpcommands.component.html',
  styleUrls: ['./alpcommands.component.css']
})
export class ALPcommandsComponent implements OnInit {

  constructor(private socketservice: SocketServiceService) {
  }

  ngOnInit() {
    this.socketservice.onALPCommandReceivedSubject().subscribe(res => {
      console.log(res);
    });
  }
}
