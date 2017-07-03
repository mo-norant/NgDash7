import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Injectable()
export class ChannelheaderService {

  constructor(private http: Http) { }

   public getChannelCodings() {
    return this.http.get("http://localhost:5000/channel_codings")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || "servererror"))

  }
   public getChannelBands() {
    return this.http.get("http://localhost:5000/channel_bands")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || "servererror"))

  }
   public getChannelClasses() {
    return this.http.get("http://localhost:5000/channel_classes")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || "servererror"))

  }

}
