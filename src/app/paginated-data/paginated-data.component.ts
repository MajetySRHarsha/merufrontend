import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild,Input } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  subject:string;
  startDate:string;
  endDate:string;
}

@Component({
  selector: 'app-paginated-data',
  templateUrl: './paginated-data.component.html',
  styleUrls: ['./paginated-data.component.css']
})
export class PaginatedDataComponent implements AfterViewInit,OnInit{
  @Input('data') data:[{}];
  p:any=[{}]
  constructor(private http:HttpClient){}
  

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<PeriodicElement>();
  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
    
  }
 
  
  displayedColumns: string[] = ['name', 'subject', 'startDate', 'endDate'];
 

  

  ngOnInit(){
      console.log("From Paginated Child Component",this.data);
      this.p=this.data;
      console.log(this.p);
      this.dataSource=new MatTableDataSource<PeriodicElement>(this.p);
  }

  
  




}
