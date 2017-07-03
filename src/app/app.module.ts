import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ConnectionbannerComponent } from './connectionbanner/connectionbanner.component';
import { ALPcommandsComponent } from './alpcommands/alpcommands.component';
import { FilesComponent } from './files/files.component';
import { LandingComponent } from './landing/landing.component';
import { FileviewComponent } from './fileview/fileview.component';
import { UIDComponent } from './fileview/filetypes/uid/uid.component';
import { FirmwareVersionComponent } from './fileview/filetypes/firmware-version/firmware-version.component';
import { DLLConfigComponent } from './fileview/filetypes/dll-config/dll-config.component';
import { AccessProfileComponent } from './fileview/filetypes/access-profile/access-profile.component';

import { SocketIoModule, SocketIoConfig } from 'ng2-socket-io';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdButtonModule, MdListModule, MdInputModule, MdSelectModule} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';


import { SocketServiceService } from './socket-service.service';
import { FileclassifierService} from './fileclassifier.service';
import { ChannelheaderService } from './channelheader.service';
import { FooterComponent } from './footer/footer.component'



 const routes: Routes = [
  { path: 'files', component: FilesComponent },
  { path: '', component: LandingComponent },
  { path: 'aplcommands', component: ALPcommandsComponent},
  { path: 'file/:id', component: FileviewComponent},
  

];


const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ConnectionbannerComponent,
    ALPcommandsComponent,
    FilesComponent,
    LandingComponent,
    FileviewComponent,
    UIDComponent,
    FirmwareVersionComponent,
    DLLConfigComponent,
    AccessProfileComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    SocketIoModule.forRoot(config),
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdListModule,
    NgbModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    MdInputModule,
    MdSelectModule

  ],
  providers: [SocketServiceService, FileclassifierService, ChannelheaderService],
  bootstrap: [AppComponent],
  entryComponents: [UIDComponent, FirmwareVersionComponent, DLLConfigComponent, AccessProfileComponent],

})
export class AppModule { }
