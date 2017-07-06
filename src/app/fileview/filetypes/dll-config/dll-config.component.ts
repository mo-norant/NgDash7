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

    console.log(this.filedata)
    this.socketService.writeFile(this.filedata).subscribe(callbackdata => console.log( callbackdata))

  }

}
