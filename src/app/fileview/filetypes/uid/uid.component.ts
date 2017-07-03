import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-uid',
  templateUrl: './uid.component.html',
  styleUrls: ['./uid.component.css']
})
export class UIDComponent implements OnInit {

  filedata

  constructor() {
   }

  ngOnInit() {
    console.log(this.filedata )
  }


}
