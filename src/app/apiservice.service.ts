import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ApiService {

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {
   }
public getAll() {
  return this._http.get('https://jsonplaceholder.typicode.com/users');
}
}
