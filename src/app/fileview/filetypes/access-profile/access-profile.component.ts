import { Component, OnInit } from '@angular/core';
import { ChannelheaderService } from '../../../channelheader.service'
import { SocketServiceService } from '../../../socket-service.service';

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
        this.fillAllOptions();

  }

  ngOnInit() {
 
    console.log(this.filedata)

        this.selectedBand = this.filedata.response_command.actions[0].operation.file_data_parsed.access_profile.channel_header.channel_band.value
        this.selectedCoding = this.filedata.response_command.actions[0].operation.file_data_parsed.access_profile.channel_header.channel_coding.value
        this.selectedClass = this.filedata.response_command.actions[0].operation.file_data_parsed.access_profile.channel_header.channel_class.value
  }

  private fillAllOptions() {

    this.ChannelheaderService.getChannelBands().subscribe(data => this.channelBands = data);
    this.ChannelheaderService.getChannelCodings().subscribe(data => this.channelCodings = data);
    this.ChannelheaderService.getChannelClasses().subscribe(data => this.channelClasses = data);

  }

  onSubmit(event) {

    console.log(event)

    let data = {
      "data": {
        "py/object": "d7a.system_files.access_profile.AccessProfileFile",
        "length": this.filedata.response_command.actions[0].operation.file_data_parsed.length,
        "id": this.filedata.response_command.actions[0].operation.file_data_parsed.id,
        "access_profile": {
          "py/object": "d7a.dll.access_profile.AccessProfile",
          "sub_bands": [
            {
              "py/object": "d7a.phy.subband.SubBand",
              "duty": 0,
              "eirp": 10,
              "channel_index_start": 0,
              "cca": 170,
              "channel_index_end": 0
            },
            {
              "py/object": "d7a.phy.subband.SubBand",
              "duty": 0,
              "eirp": 0,
              "channel_index_start": 0,
              "cca": 0,
              "channel_index_end": 0
            },
            {
              "py/object": "d7a.phy.subband.SubBand",
              "duty": 0,
              "eirp": 0,
              "channel_index_start": 0,
              "cca": 0,
              "channel_index_end": 0
            },
            {
              "py/object": "d7a.phy.subband.SubBand",
              "duty": 0,
              "eirp": 0,
              "channel_index_start": 0,
              "cca": 0,
              "channel_index_end": 0
            },
            {
              "py/object": "d7a.phy.subband.SubBand",
              "duty": 0,
              "eirp": 0,
              "channel_index_start": 0,
              "cca": 0,
              "channel_index_end": 0
            },
            {
              "py/object": "d7a.phy.subband.SubBand",
              "duty": 0,
              "eirp": 0,
              "channel_index_start": 0,
              "cca": 0,
              "channel_index_end": 0
            },
            {
              "py/object": "d7a.phy.subband.SubBand",
              "duty": 0,
              "eirp": 0,
              "channel_index_start": 0,
              "cca": 0,
              "channel_index_end": 0
            },
            {
              "py/object": "d7a.phy.subband.SubBand",
              "duty": 0,
              "eirp": 0,
              "channel_index_start": 0,
              "cca": 0,
              "channel_index_end": 0
            }
          ],
          "channel_header": {
            "py/object": "d7a.phy.channel_header.ChannelHeader",
            "channel_class": {
              "py/object": "d7a.phy.channel_header.ChannelClass",
             "value": event.Channelclass
            },
            "channel_coding": {
              "py/object": "d7a.phy.channel_header.ChannelCoding",
              "value": event.Channelcoding
            },
            "channel_band": {
              "py/object": "d7a.phy.channel_header.ChannelBand",
              "value": event.Channelband
            }
          },
          "sub_profiles": [
            {
              "py/object": "d7a.dll.sub_profile.SubProfile",
              "scan_automation_period": {
                "py/object": "d7a.types.ct.CT",
                "mant": 0,
                "exp": 0
              },
              "subband_bitmap": 1
            },
            {
              "py/object": "d7a.dll.sub_profile.SubProfile",
              "scan_automation_period": {
                "py/object": "d7a.types.ct.CT",
                "mant": 0,
                "exp": 0
              },
              "subband_bitmap": 0
            },
            {
              "py/object": "d7a.dll.sub_profile.SubProfile",
              "scan_automation_period": {
                "py/object": "d7a.types.ct.CT",
                "mant": 0,
                "exp": 0
              },
              "subband_bitmap": 0
            },
            {
              "py/object": "d7a.dll.sub_profile.SubProfile",
              "scan_automation_period": {
                "py/object": "d7a.types.ct.CT",
                "mant": 0,
                "exp": 0
              },
              "subband_bitmap": 0
            }
          ]
        },
        "access_specifier": this.filedata.response_command.actions[0].operation.file_data_parsed.access_specifier
      },
      "file_id": this.filedata.response_command.actions[0].operation.file_data_parsed.id,
      "file_name":"ACCESS_PROFILE_1",
      "id":1499173307359
      
    }

    console.log(data)
    this.socketService.writeFile(data).subscribe(callbackdata => console.log(callbackdata))


  }




}



