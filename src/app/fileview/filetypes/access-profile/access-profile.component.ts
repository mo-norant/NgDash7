import { Component, OnInit } from '@angular/core';
import { ChannelheaderService } from '../../../channelheader.service'

@Component({
  selector: 'app-access-profile',
  templateUrl: './access-profile.component.html',
  styleUrls: ['./access-profile.component.css']
})
export class AccessProfileComponent implements OnInit {
  
  filedata
  channelBands
  channelCodings
  channelClasses

  selectedChannelBand
  selectedChannelCoding
  selectedchannelClass
  
  constructor(private ChannelheaderService : ChannelheaderService) { }

  ngOnInit() {
    this.fillAllOptions();
  }

  public fillAllOptions(){

    this.ChannelheaderService.getChannelBands().subscribe(data => this.channelBands = data);
    this.ChannelheaderService.getChannelCodings().subscribe(data => this.channelCodings = data);
    this.ChannelheaderService.getChannelClasses().subscribe(data => this.channelClasses = data);

  }

}
