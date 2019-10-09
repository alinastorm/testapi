import { Component, OnInit} from '@angular/core';
import { ApiService} from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'api';
public users;
  constructor(private data: ApiService) {
  }
ngOnInit(): void {
this.data.getAll().subscribe(users => this.users = users);
}
}
