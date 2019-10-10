import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TypeGitSearch {
  'total_count': number;
  'incomplete_results': false;
  'items': [
    { login: string; }
  ];
}
@Injectable()
export class ApiService {
  public serchInput: string;

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {
  }


  public iWontItAll(target: string): Observable<TypeGitSearch> {
    const url = `https://api.github.com/search/users?q=${target}`;

    return this._http.get<TypeGitSearch>(url);

  }

}
