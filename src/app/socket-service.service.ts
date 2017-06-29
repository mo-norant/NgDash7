import { Injectable } from '@angular/core';
import { Socket } from 'ng2-socket-io';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SocketServiceService {

  private url = 'http://localhost:5000';
  tag_to_destination_model = {};
  tag_to_file_id = {};
  destination_model = {
    COMMANDS: 0,
    FILES: 1
  };



  constructor(private socket: Socket, private http: Http) {



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

  public recieveAPLcommand() {
    const observable = new Observable(observer => {
      this.socket.on('received_alp_command', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      }
    })
    return observable;
  }

  public getAllFiles() {
    return this.http.get("http://localhost:5000/systemfiles")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || "servererror"))

  }


  public readFile(file_id) {
    const observable = new Observable(observer => {
      this.socket.emit('read_local_system_file', { 'system_file_id': file_id }, (response_data) => {
        
        observer.next (response_data.tag_id);
      });

      return () =>{
        this.socket.disconnect();
      }
    })

    return observable

  }






}
