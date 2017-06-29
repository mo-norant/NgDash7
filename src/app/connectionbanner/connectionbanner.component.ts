import { Component, OnInit } from '@angular/core';
import { SocketServiceService } from '../socket-service.service';
@Component({
  selector: 'app-connectionbanner',
  templateUrl: './connectionbanner.component.html',
  styleUrls: ['./connectionbanner.component.css']
})
export class ConnectionbannerComponent implements OnInit {

  connectiondata;

  constructor(private socketservice:SocketServiceService) {

      this.socketservice.getConnectionInfo().subscribe((data) => this.connectiondata = data);

  }

  ngOnInit() {
  }

}
