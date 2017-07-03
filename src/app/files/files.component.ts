import { Component, OnInit, ViewContainerRef  } from '@angular/core';
import { SocketServiceService } from '../socket-service.service';
import { FileviewComponent } from '../fileview/fileview.component';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { NotificationsService } from 'angular2-notifications';



@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  public notificationOptions = {
    showProgressBar: true,
    pauseOnHover: false,
    clickToClose: true,
    timeOut: 2000,
    position: ["bottom", "right"],
  };

  files;

constructor(private socketservice: SocketServiceService, private notificationService: NotificationsService) {
this.socketservice.getAllFiles().subscribe(files => {
  notificationService.success("Files Received");
  this.files = files;
}, error => this.notificationService.error(error));
}

  ngOnInit() {
  }



   
}
