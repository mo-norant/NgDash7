import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ng2-socket-io';
import { ConnectionbannerComponent } from './connectionbanner/connectionbanner.component';
import { ALPcommandsComponent } from './alpcommands/alpcommands.component';

import { SocketServiceService } from './socket-service.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule } from '@angular/material';
import { MdButtonModule} from '@angular/material';
import { FilesComponent } from './files/files.component';
import { LandingComponent } from './landing/landing.component'
import { RouterModule, Routes } from '@angular/router';

 const routes: Routes = [
  { path: 'files', component: FilesComponent },
  { path: '', component: LandingComponent },
  { path: 'aplcommands', component: ALPcommandsComponent}

];


const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ConnectionbannerComponent,
    ALPcommandsComponent,
    FilesComponent,
    LandingComponent
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
    MdButtonModule
  ],
  providers: [SocketServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
