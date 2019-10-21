import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';



export interface HttpResponseLogin {
  status: true;
  token: string;
}

@Injectable()
export class ApiService {
  private _url = `http://headnet.by:7110`;
  private handleError;

  constructor(private _http: HttpClient) {
  }


  public login(hashlp) {
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    const body = {
      async: false,
      action: 'login',
      hashlp
    };
    return this._http.post<HttpResponseLogin>(this._url, JSON.stringify(body), { headers });
  }

  public connect(method, async, token, data) {
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    const body = {
      async,
      token,
      data: [data]
    };

    return this._http.post<HttpResponseLogin>(this._url, JSON.stringify(body), { headers });
  }


}

