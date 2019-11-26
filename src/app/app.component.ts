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
  public stream$: Observable<any> = new Observable();


  constructor(private apiService: ApiService) { }


  public login(login, password) {
    const hashedLogPass = SHA1((login.toLowerCase() + password)).toString(enc.Base64);
    this.apiService.login(hashedLogPass).subscribe((value) => {
      this.apiServiceLoginStatus = value.status;
      this.runTests(value.token);
    });
  }

  public async runTests(token) {
    const token2 = token;

    localStorage.clear();

    for (const elementAllCommands of allcommands) {

      await this.go(elementAllCommands, token2);



    }

  }
  public async go(elementAllCommands, token) {

    for (const elementReqPars of elementAllCommands.reqPars) {


      console.log(elementReqPars.readStorKey);

      // StartСondition
      if ('StartСondition' in elementReqPars) {
        if (!_.get(JSON.parse(localStorage.getItem(elementReqPars.StartСondition.StorKey)),
          elementReqPars.StartСondition.PathStorKey,
        )) {
          console.log(!_.get(JSON.parse(localStorage.getItem(elementReqPars.StartСondition.StorKey)),
            elementReqPars.StartСondition.PathStorKey,
          ), 'StartСondition-breake');
          continue;
        }
      }
      // StopСondition
      if ('StopСondition' in elementReqPars) {
        // console.log((_.get(JSON.parse(localStorage.getItem(elementReqPars.StopСondition.StorKey)),
        //   elementReqPars.StopСondition.PathStorKey,
        // )));
        if (_.get(JSON.parse(localStorage.getItem(elementReqPars.StopСondition.StorKey)),
          elementReqPars.StopСondition.PathStorKey,
        )) {
          // console.log(elementReqPars.StorKey, 'StopСondition-break');
          continue;
        }
      }


      _.set(
        elementAllCommands,
        elementReqPars.pathValue,
        elementReqPars.readStorePathValue ?
          _.get(
            JSON.parse(localStorage.getItem(elementReqPars.readStorKey)),
            elementReqPars.readStorePathValue,
            elementReqPars.defValue
          ) :
          JSON.parse(localStorage.getItem(elementReqPars.readStorKey)) ?
            JSON.parse(localStorage.getItem(elementReqPars.readStorKey)) : elementReqPars.defValue
      );

    }

    await this.apiService.connect(elementAllCommands.reqData.action, elementAllCommands.async, token, elementAllCommands.reqData)
      .toPromise().then((connectValue$: any) => {


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


        for (const elementRespPars of elementAllCommands.respPars) {


          if ('addStorKey' in elementRespPars) {

            if ('StartСondition' in elementRespPars.addStorKey) {

              if (!_.get(JSON.parse(localStorage.getItem(elementRespPars.addStorKey.StartСondition.StorKey)),
                elementRespPars.addStorKey.StartСondition.PathStorKey,
                elementRespPars.addStorKey.StartСondition.defValue
              ) === elementRespPars.addStorKey.StartСondition.CheckValue) {

                continue;

              }
            }
            // блок добавления ключа
            const object = new Object();
            // tslint:disable-next-line: max-line-length
            const other = elementRespPars.addStorKey.SructureKeyValue ? JSON.parse(elementRespPars.addStorKey.SructureKeyValue) : new Object();
            console.log('connectValue$', connectValue$);
            localStorage.setItem(
              elementRespPars.addStorKey.StorKey,
              JSON.stringify(
                _.set(
                  _.merge(object, other),
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

        }


        // elementAllCommands.respPars.forEach(elementRespPars => {
        // });


      }
        , (err) => {


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


