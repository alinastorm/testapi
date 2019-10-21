import { Component, Input, OnInit, AfterViewInit, AfterViewChecked, OnChanges, DoCheck } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';


// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-table-expandable-rows-example',
  styleUrls: ['./table.component.css'],
  templateUrl: './table.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})



// tslint:disable-next-line: component-class-suffix
export class TableExpandableRowsExample implements OnInit, DoCheck {
  @Input()
  public results;

  dataSource: MatTableDataSource<{ action: string }>;

  columnsToDisplay = ['action', 'id_query', 'status', 'statusText'];
  expandedElement: PeriodicElement | null;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.results);

  }
  ngDoCheck() {
    this.dataSource._updateChangeSubscription();
  }


}


export interface PeriodicElement {
  action: string;

}


