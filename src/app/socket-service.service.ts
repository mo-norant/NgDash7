import { Injectable } from '@angular/core';
import { Socket } from 'ng2-socket-io';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SocketServiceService {

  url = 'http://localhost:5000';
  listdata = [];

  tag_to_destination_model = {};
  tag_to_file_id = {};
  destination_model = {
    COMMANDS: 0,
    FILES: 1
  };
  fileCount: number;

  private subject = new Subject<any>();

  constructor(private socket: Socket, private http: Http) {
    this.socket.connect();
    this.socket.on('connect', function () {
      console.log('connected');
    });
    this.socket.on('received_alp_command', (data) => {
      console.log('received_alp_command');
      this.subject.next(data);
    });
  }

  onALPCommandReceivedSubject(): Subject<any> {
    return this.subject;
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

  public getAllFiles() {
    return this.http.get(this.url + "/systemfiles")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || "servererror"))
  }

  public readFile(file_id) {
    const observable = new Observable(observer => {
      this.socket.emit('read_local_system_file', { 'system_file_id': file_id }, (response_data) => {
        observer.next(response_data.tag_id);
      });

      return () => {
        this.socket.disconnect();
      };
    })

    return observable;
  }

  public writeFile(file_data) {
    const observable = new Observable(observer => {
      this.socket.emit('write_local_system_file', file_data, callbackdata => {
        console.log(callbackdata)
        observer.next(callbackdata);
      });

      return () => {
        this.socket.disconnect();
      }
    });

    return observable;
  }

}

