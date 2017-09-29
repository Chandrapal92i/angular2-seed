import { Component, OnInit } from '@angular/core';

import { FetchDataService } from '../fetch-data.service';

import { OrderByPipe } from '../order-by.pipe';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css'],
  providers: [FetchDataService]
})
export class DataListComponent implements OnInit {

  constructor(private _dataService : FetchDataService) { }
  
  public detailList : any[];

  public isDesc : boolean;
 
  public column : string;

  public direction : number;
 
  // function used to fetch list of Json onload of this component.
  ngOnInit() {
    this._dataService.getDetailList().subscribe(data => this.detailList = data);
  }

  // function used to do sorting.
  sort(property){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };

}
