import { Component, OnInit, OnChanges } from '@angular/core';
import { ApiService } from './apiservice.service';
import { SHA1, enc } from 'crypto-js';
import { allcommands } from './commands';
import * as _ from 'lodash';
import { async } from '@angular/core/testing';
import { pipe } from 'rxjs';
import { Observable, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public apiServiceLoginStatus = false;
  public apiServiceLoginToken;
  public results = [];




  constructor(private apiService: ApiService) { }


  public login(login, password) {
    const hashedLogPass = SHA1((login.toLowerCase() + password)).toString(enc.Base64);
    this.apiService.login(hashedLogPass).subscribe((value) => {
      this.apiServiceLoginStatus = value.status;
      this.runTests(value.token);
    });
  }

  public runTests(token) {
    const token2 = token;
    localStorage.clear();

    for (const elementAllCommands of allcommands) {

      this.go(elementAllCommands, token2);


      console.log('Следующим должен быть 2');
    }

  }
  public async go(elementAllCommands, token) {

    elementAllCommands.reqPars.forEach(elementReqPars => {


      console.log('localStorage', localStorage.getItem('users'));

      console.log('1');
      _.set(
        elementAllCommands,
        elementReqPars.pathValue,
        _.get(
          JSON.parse(localStorage.getItem(elementReqPars.readStorKey)),
          elementReqPars.readStorePathValue,
          elementReqPars.defValue
        ));

    });

    this.apiService.connect(elementAllCommands.reqData.action, elementAllCommands.async, token, elementAllCommands.reqData)
      .subscribe((connectValue$: any) => {
        console.log('2');
        // console.log(connectValue$);
        this.results.push(
          {
            description: elementAllCommands.description,
            action: elementAllCommands.reqData.action,
            id_query: elementAllCommands.reqData.id_query,
            requestData: JSON.stringify(elementAllCommands.reqData),
            status: connectValue$.status,
            responceDescription: JSON.stringify(connectValue$)
          }
        );

        elementAllCommands.respPars.forEach(elementRespPars => {

          if ('addStorKey' in elementRespPars) {
            const object = new Object();
            // console.log(elementRespPars.addStorKey.StorKey);
            localStorage.setItem(
              elementRespPars.addStorKey.StorKey,
              JSON.stringify(
                _.set(
                  object,
                  elementRespPars.addStorKey.PathStorKey,
                  _.get(
                    connectValue$,
                    elementRespPars.addStorKey.PathRespValue,
                    elementRespPars.addStorKey.DefValue)
                )
              )
            );
          }

          // блок редактирования stor ключа  stor ключем
          if ('editStorKeyOfStorKey' in elementRespPars) {
            // console.log('3');

            localStorage.setItem(
              elementRespPars.editStorKeyOfStorKey.StorKey,
              JSON.stringify(_.set(
                JSON.parse(
                  localStorage.getItem(
                    elementRespPars.editStorKeyOfStorKey.StorKey
                  )
                ),
                elementRespPars.editStorKeyOfStorKey.editPathValue,
                _.get(
                  JSON.parse(
                    localStorage.getItem(
                      elementRespPars.editStorKeyOfStorKey.readStorKey
                    )),
                  elementRespPars.editStorKeyOfStorKey.readStorPath,
                  elementRespPars.editStorKeyOfStorKey.readStorDefValue
                )
              )
              )
            );
          }

          // блок редактирования stor ключа  respom
          if ('editStorKeyResp' in elementRespPars) {
            localStorage.setItem(
              elementRespPars.editStorKeyResp.StorKey,
              JSON.stringify(_.set(
                JSON.parse(
                  localStorage.getItem(
                    elementRespPars.editStorKeyResp.StorKey
                  )
                ),
                elementRespPars.editStorKeyResp.editPathValue,
                _.get(
                  connectValue$,
                  elementRespPars.editStorKeyResp.respPathValue,
                  elementRespPars.editStorKeyResp.respDefValue
                )
              )
              )
            );
          }
        });


      }
        , (err) => {
          console.log('2');

          this.results.push({
            description: elementAllCommands.description,
            action: elementAllCommands.reqData.action,
            id_query: elementAllCommands.reqData.id_query,
            requestData: JSON.stringify(elementAllCommands.reqData),
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
  }
}


