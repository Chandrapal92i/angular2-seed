import { Component, OnInit } from '@angular/core';

import { FetchDataService } from '../fetch-data.service';


@Component({
  selector: 'app-process-json-list',
  templateUrl: './process-json-list.component.html',
  styleUrls: ['./process-json-list.component.css'],
  providers : [FetchDataService]
})
export class ProcessJsonListComponent implements OnInit {

  constructor(private _dataService : FetchDataService) { }

   public processList : any [];

  // function used to fetch list of Json onload of this component.
  ngOnInit() {
    this._dataService.getDetailList().subscribe(data => this.processList = data);
  }

}
