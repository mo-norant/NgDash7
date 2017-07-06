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
        console.log(data)
        observer.next(data);
      });
      

      return () => {
        this.socket.disconnect();
      }
    })
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
      }
    })

    return observable

  }

  public writeFile(file_data) {

    const observable = new Observable(observer => {
      this.socket.emit('write_local_system_file', file_data, callbackdata => {
        observer.next(callbackdata);
      });

      return () => {
        this.socket.disconnect();
      }
    });

    return observable;
  }

  public setList(item){
    console.log(item)
    this.listdata.push(item)
  }

  public getList(){
    return this.listdata
  }

  public clearList() {
    this.listdata = [];
  }



}

