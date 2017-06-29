import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { SocketServiceService } from '../socket-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fileview',
  templateUrl: './fileview.component.html',
  styleUrls: ['./fileview.component.css']
})
export class FileviewComponent implements OnInit {

  fileid
  Emitid
  Controlid
  filedata
  isSameTagId = false;
  


  constructor(private socketservice: SocketServiceService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fileid = +params['id'];

    });

    this.socketservice.readFile(this.fileid).subscribe(data => {this.Emitid = data});

    this.socketservice.recieveAPLcommand().subscribe(data => {
      this.filedata = data;
      this.isSameTagId = (55 == this.filedata.tag_id)
      console.log(this.filedata)
      
      
    })

  }

}
