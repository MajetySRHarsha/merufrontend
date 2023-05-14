import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ELEMENT_DATA } from '../content/content.component';
import { PeriodicElement } from '../content/content.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-filtereddata',
  templateUrl: './filtereddata.component.html',
  styleUrls: ['./filtereddata.component.css']
})
export class FiltereddataComponent implements OnInit ,AfterViewInit{
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
  }
 
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  p = ELEMENT_DATA;
  filteredData:PeriodicElement[]=[];
  

  ngOnInit(){
   this.filteredData= this.p.filter(data=>data.weight>5);
   this.dataSource=new MatTableDataSource<PeriodicElement>(this.filteredData);
  }
  

}
