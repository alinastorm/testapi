import { Component, Input, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs';


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
export class TableExpandableRowsExample {
  @Input()
  public results;

  // dataSource1 = [
  //   {
  //     action: '1'
  //   },
  //   {
  //     action: '2'
  //   }];
  columnsToDisplay = ['action'];
  expandedElement: PeriodicElement | null;
  ngOninit() {
    // this.paginator._changePageSize(this.paginator.pageSize);
    // console.log(this.results[0]);
  }

}


export interface PeriodicElement {
  action: string;

}


