import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SignupService {
  sugnupUrl = '/signup';
  constructor(private http: Http) { }
  register(data):Observable<any>{
    return this.http.post(this.sugnupUrl,data)
    .map(this.extractData)
    .catch(this.handleError);
  }
  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }
  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}