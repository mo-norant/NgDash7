import { Component, OnInit ,ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { SocketServiceService } from '../socket-service.service';
import { Observable } from 'rxjs/Observable';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app-alpcommands',
  templateUrl: './alpcommands.component.html',
  styleUrls: ['./alpcommands.component.css'],
  providers : [Modal]
})
export class ALPcommandsComponent implements OnInit {

modalbody = `
            <h4>{{listdata}}</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`

  listdata = [];

  constructor(public socketService: SocketServiceService, public modal: Modal) {

  }

  ngOnInit() {

     this.socketService.onALPCommandReceivedSubject().subscribe(res => {
      this.listdata.push(res)
     });
  }

  modalopener(event){
    console.log(event)
  }

}
