import { Component, OnInit, ViewContainerRef  } from '@angular/core';
import { SocketServiceService } from '../socket-service.service';
import { FileviewComponent } from '../fileview/fileview.component';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  files;

constructor(private socketservice: SocketServiceService) {
this.socketservice.getAllFiles().subscribe(files => this.files = files);
}

  ngOnInit() {
  }



   
}
