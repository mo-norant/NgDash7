import { ChannelheaderService } from '../../../channelheader.service'
import { SocketServiceService } from '../../../socket-service.service';
import { Component, OnInit } from '@angular/core';


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
  
  selectedBand
  selectedCoding
  selectedClass

  constructor(private ChannelheaderService: ChannelheaderService, private socketService: SocketServiceService) {

  }

  ngOnInit() {
 
      this.fillAllOptions();
      this.selectedBand = this.filedata.access_profile.channel_header.channel_band.value
      this.selectedCoding = this.filedata.access_profile.channel_header.channel_coding.value
      this.selectedClass = this.filedata.access_profile.channel_header.channel_class.value
  }

  
  private fillAllOptions() {

    this.ChannelheaderService.getChannelBands().subscribe(data => this.channelBands = data);
    this.ChannelheaderService.getChannelCodings().subscribe(data => this.channelCodings = data);
    this.ChannelheaderService.getChannelClasses().subscribe(data => this.channelClasses = data);

  }

  onSubmit(event) {

    


    console.log(event)



    console.log(this.filedata)

    this.filedata.vid = Number(this.filedata.vid)

  
    this.socketService.writeFile(this.filedata).subscribe(callbackdata => console.log(callbackdata), error => {
      console.log(error)
    })


  }




}



