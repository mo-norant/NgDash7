import { Injectable } from '@angular/core';
import { Socket } from 'ng2-socket-io';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SocketServiceService {

  private url = 'http://localhost:5000';
  tag_to_destination_model = {};
  tag_to_file_id = {};
  destination_model = {
    COMMANDS: 0,
    FILES: 1
  };

  constructor(private socket: Socket) {

    this.socket.connect();
    this.socket.on('connect', function () {
      console.log('connected');
    });

  }

  public getConnectionInfo() {
    const observable = new Observable(observer => {
      this.socket.on('module_info', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }



  public readFile(file_id) {
    this.socket.emit('read_local_system_file', { 'system_file_id': file_id }, (response_data) => {
      this.tag_to_destination_model[response_data['tag_id']] = this.destination_model.FILES;
      this.tag_to_file_id[response_data['tag_id']] = file_id;
      console.log(this.destination_model);
      console.log(this.tag_to_file_id);
    });
  }




}
