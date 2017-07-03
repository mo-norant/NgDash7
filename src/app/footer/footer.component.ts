import { Component, OnInit } from '@angular/core';
import { SocketServiceService } from '../socket-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
connectiondata;

  constructor(private socketservice:SocketServiceService) { 
          this.socketservice.getConnectionInfo().subscribe((data) => this.connectiondata = data);

  }

  ngOnInit() {
  }

}
