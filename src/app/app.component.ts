import { Component, OnInit, OnChanges } from '@angular/core';
import { ApiService } from './apiservice.service';
import { debounceTime, switchMap, filter } from 'rxjs/operators';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'api';

  public users;
  public login: string;

  findControl = new FormControl();

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {

    this.findControl.valueChanges.pipe(
      filter(value => value.length > 1),
      debounceTime(1000),
      switchMap(value => this.apiService.iWantItAll(value)))
      .subscribe((users) => this.users = users.items);

  }


}
