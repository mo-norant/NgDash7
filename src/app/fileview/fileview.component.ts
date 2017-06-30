import { Component, OnInit, ViewContainerRef , ComponentFactoryResolver } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { SocketServiceService } from '../socket-service.service';
import { ActivatedRoute } from '@angular/router';

import { UIDComponent } from './filetypes/uid/uid.component';

import { FileclassifierService } from '../fileclassifier.service';

@Component({
  selector: 'app-fileview',
  templateUrl: './fileview.component.html',
  styleUrls: ['./fileview.component.css']
})
export class FileviewComponent implements OnInit {

  fileid;
  Emitid;
  Controlid;
  filedata;
  isSameTagId = false;


  constructor(public viewContainerRef: ViewContainerRef, private socketservice: SocketServiceService, private route: ActivatedRoute,
  public _componentFactory: ComponentFactoryResolver , private _fileclassifierService: FileclassifierService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fileid = +params['id'];
      alert(this._fileclassifierService.getFileSpecification(this.fileid));

    });


    this.socketservice.readFile(this.fileid).subscribe(data => {this.Emitid = data});

    this.socketservice.recieveAPLcommand().subscribe(data => {
      this.filedata = data;
      this.isSameTagId = (this.Emitid === this.filedata.tag_id)

    });

  }



}
