import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firmware-version',
  templateUrl: './firmware-version.component.html',
  styleUrls: ['./firmware-version.component.css']
})
export class FirmwareVersionComponent implements OnInit {

  filedata
  constructor() { }

  ngOnInit() {
    console.log(this.filedata)
  }

}
