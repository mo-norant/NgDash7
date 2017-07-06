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

    this.socketService.recieveAPLcommand().subscribe(data => {this.socketService.setList(data);
    this.listdata = this.socketService.getList()})



      
    this.modal.alert()
     );
  }   .size('lg')
        .showClose(true)
        .title('A simple Alert style modal window')
        .body(this.modalbody)
        .open(

  

  ngOnInit() {
  }

}
