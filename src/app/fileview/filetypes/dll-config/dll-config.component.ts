import { Component, OnInit } from '@angular/core';
import { SocketServiceService } from '../../../socket-service.service';

@Component({
  selector: 'app-dll-config',
  templateUrl: './dll-config.component.html',
  styleUrls: ['./dll-config.component.css']
})
export class DLLConfigComponent implements OnInit {
  filedata
  NOTIMPLEMENTED = "NOT IMPLEMENTED"




  constructor(private socketService: SocketServiceService) { }

  ngOnInit() {
    console.log(this.filedata);
  }
  onSubmit(event) {

    let data = {
      "active_access_class": Number(event.ActiveAccesClass),
      "length": this.filedata.response_command.actions[0].operation.file_data_parsed.length,
      "py/object": this.filedata.response_command.actions[0].operation.file_data_parsed["py/object"],
      "vid": Number(event.VID),
      "id" : this.filedata.response_command.actions[0].operation.file_data_parsed.id
    }
    
    this.socketService.writeFile(data).subscribe(callbackdata => console.log( callbackdata))

  }

}
