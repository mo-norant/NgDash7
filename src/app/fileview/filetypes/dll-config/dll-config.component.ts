import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dll-config',
  templateUrl: './dll-config.component.html',
  styleUrls: ['./dll-config.component.css']
})
export class DLLConfigComponent implements OnInit {
filedata
  constructor() { }

  ngOnInit() {
    console.log(this.filedata)
  }

}
