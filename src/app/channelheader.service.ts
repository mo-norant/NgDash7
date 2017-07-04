import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Injectable()
export class ChannelheaderService {
 
  url = 'http://localhost:5000';

  constructor(private http: Http) { }

   public getChannelCodings() {
    return this.http.get(this.url + "/channel_codings")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || "servererror"))

  }
   public getChannelBands() {
    return this.http.get(this.url + "/channel_bands")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || "servererror"))

  }
   public getChannelClasses() {
    return this.http.get(this.url + "/channel_classes")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || "servererror"))

  }

}
