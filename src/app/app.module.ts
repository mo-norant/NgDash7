import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ng2-socket-io';
import { ConnectionbannerComponent} from './connectionbanner/connectionbanner.component';
import { ALPcommandsComponent } from './alpcommands/alpcommands.component'

const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ConnectionbannerComponent,
    ALPcommandsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SocketIoModule.forRoot(config) 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
