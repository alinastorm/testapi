import { Component, OnInit, OnChanges } from '@angular/core';
import { ApiService } from './apiservice.service';
import { SHA1, enc } from 'crypto-js';
import { allcommands } from './commands';

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
      this.runTests(value.token);
    });
  }

  public runTests(token) {

    allcommands.forEach(element => {

      this.apiService.connect(element.requestData.action, element.async, token, element.requestData).subscribe((value: any) => {
        this.results.push(
          {
            description: element.description,
            action: element.requestData.action,
            id_query: element.requestData.id_query,
            requestData: JSON.stringify(element.requestData),
            status: value.status,
            responceDescription: JSON.stringify(value.data)
          }
        );
      }
        , (err) => {
          this.results.push({

            action: element.requestData.action,
            id_query: element.requestData.id_query,
            requestData: JSON.stringify(element.requestData),
            name: err.name,
            message: err.message,
            status: err.ok,
            statusErr: err.status,
            statusText: err.statusText,
            url: err.url,
            errorDescription: JSON.stringify(err.error),
          });
        }

      );
    });

    setTimeout(() => {
      this.results.push(
        {
          action: 'SelfTest-setTimeout3000'
        });
    }, 3000);
  }
}

