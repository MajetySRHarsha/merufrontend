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
  finalData:any=[{}]
  constructor(private http:HttpClient){}
  

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<PeriodicElement>(this.finalData);
  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
    
  }
 
  
  displayedColumns: string[] = ['name', 'subject', 'startDate', 'endDate'];
 
  filteredData:PeriodicElement[]=[];
  

  ngOnInit(){
  //this.filteredData= this.p.filter(data=>data.weight>5);
    
      console.log("From Paginated Child Component",this.data);
      this.p=this.data;
      console.log(this.p);
      const currentDate = new Date(); 
    this.filteredData= this.p.filter(data => {
      const startDate = this.parseDate(data.startDate); 
      const endDate = this.parseDate(data.endDate); 
      return currentDate >= startDate && currentDate <= endDate || currentDate <= startDate && currentDate <= endDate; 
    })
      this.dataSource=new MatTableDataSource<PeriodicElement>(this.filteredData);
    
 
  }

  parseDate(dateString: string): Date {
    const [day, month, year] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
  }
  




}
