import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild, OnDestroy } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { UIDComponent } from './filetypes/uid/uid.component'
import { FirmwareVersionComponent } from './filetypes/firmware-version/firmware-version.component'
import { DLLConfigComponent } from './filetypes/dll-config/dll-config.component'
import { AccessProfileComponent} from './filetypes/access-profile/access-profile.component'

import { SocketServiceService } from '../socket-service.service';
import { FileclassifierService } from '../fileclassifier.service';


@Component({
  selector: 'app-fileview',
  templateUrl: './fileview.component.html',
  styleUrls: ['./fileview.component.css'],
})
export class FileviewComponent implements OnInit {

  @ViewChild('formcontainer', { read: ViewContainerRef }) formcontainer;

  fileid;
  Emitid = -1; // invalid tag-id
  Controlid;
  filedata;
  filetitle;
  isSameTagId = false;


  constructor(
              private resolver: ComponentFactoryResolver,
              private socketservice: SocketServiceService,
              private route: ActivatedRoute,
              private _fileclassifierService: FileclassifierService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fileid = +params['id'];
      this.filetitle = this._fileclassifierService.getFileSpecification(this.fileid);
    });



    this.socketservice.onALPCommandReceivedSubject().subscribe(res => {
      console.log('fileview');
      console.log(res);
      if(res.tag_id !== this.Emitid) {
        console.log('skipping');
      } else {
        console.log('tag-id matches');
        this.filedata = res;
        this.createComponentContainer(this.fileid);
      }
    });

    this.socketservice.readFile(this.fileid).subscribe(tag_id => {
      console.log('!!!');
      this.Emitid = Number(tag_id);
    });
  }

  private createComponentContainer(FileID) {

    let component = this.getComponent(this.fileid);
    const FileFactory = this.resolver.resolveComponentFactory(component);
    let FileContainer = this.formcontainer.createComponent(FileFactory);

    //Linkdata to childinstance of file
    
    FileContainer.instance.filedata = this.filedata;


  }

  public getComponent(id): any {

    const ACCESS_PROFILE_START = 31;
    const ACCESS_PROFILE_ENDING = 47;

    if (id > ACCESS_PROFILE_START && id < ACCESS_PROFILE_ENDING) {
      return AccessProfileComponent;
    }

    switch (id) {
      case 0: return UIDComponent;
      case 1: return 'FACTORY_SETTINGS';
      case 2: return FirmwareVersionComponent;
      case 3: return 'DEVICE_CAPACITY';
      case 4: return 'DEVICE_STATUS';
      case 5: return 'ENGINEERING_MODE';
      case 10: return DLLConfigComponent;
      case 11: return 'TRL_STATUS';
      case 12: return 'SEL_CONFIGURATION';
      case 13: return 'SEL_STATUS';
    }
  }

  
}