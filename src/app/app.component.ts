import { Component, OnInit, OnChanges } from '@angular/core';
import { ApiService } from './apiservice.service';
import { debounceTime, switchMap, filter, catchError } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { SHA1, enc } from 'crypto-js';
import { allcommands } from './commands';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public apiServiceLoginStatus = false;
  public apiServiceLoginToken;
  public results = [];
  public badResults = [];


  constructor(private apiService: ApiService) { }


  public login(login, password) {
    const hashedLogPass = SHA1((login.toLowerCase() + password)).toString(enc.Base64);
    this.apiService.login(hashedLogPass).subscribe((value) => {
      this.apiServiceLoginStatus = value.status;
      this.tests(value.token);
    });
  }

  public tests(token) {
    // this.results.push(
    //   {
    //     action: '1'
    //   },
    //   {
    //     action: '2'
    //   });



    allcommands.forEach(element => {

      // tslint:disable-next-line: max-line-length
      this.apiService.connect(element.requestData.action, element.async, token, element.requestData).subscribe((value: any) => {

        this.results.push(
          // {
          //   action: element.requestData.action,
          //   // id_query: element.requestData.id_query,
          //   // status: value.status,

          // }
          {
            action: '1'
          },
          {
            action: '2'
          }
        );
      }
        , (err) => {

          this.badResults.push({
            action: element.requestData.action,
            // id_query: element.requestData.id_query,
            // status: err.error.text
          });


        }

      );
    });


  }
}

