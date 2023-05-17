import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild,Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  subject:string;
  startDate:string;
  endDate:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: "Alice Johnson",
    subject: "Math",
    startDate: "13-05-2023",
    endDate: "14-05-2023"
  },
  {
    name: "Bob Smith",
    subject: "English",
    startDate: "15-08-2023",
    endDate: "30-12-2023"
  },
  {
    name: "Charlie Davis",
    subject: "Science",
    startDate: "01-09-2023",
    endDate: "15-01-2024"
  },
  {
    name: "David Lee",
    subject: "History",
    startDate: "15-09-2023",
    endDate: "30-01-2024"
  },
  {
    name: "Emma Hernandez",
    subject: "Art",
    startDate: "01-10-2023",
    endDate: "15-02-2024"
  },
  {
    name: "Frank Garcia",
    subject: "Music",
    startDate: "15-10-2023",
    endDate: "28-02-2024"
  },
  {
    name: "Grace Nguyen",
    subject: "Physical Education",
    startDate: "01-11-2023",
    endDate: "15-03-2024"
  },
  {
    name: "Henry Kim",
    subject: "Computer Science",
    startDate: "15-11-2023",
    endDate: "30-03-2024"
  },
  {
    name: "Isabella Rodriguez",
    subject: "Foreign Language",
    startDate: "01-12-2023",
    endDate: "15-04-2024"
  },
  {
    name: "John Martinez",
    subject: "Social Studies",
    startDate: "15-12-2023",
    endDate: "30-04-2024"
  }
];



@Component({
  selector: 'app-filtereddata',
  templateUrl: './filtereddata.component.html',
  styleUrls: ['./filtereddata.component.css']
})

export class FiltereddataComponent implements OnInit ,AfterViewInit{
  @Input('data') data:[{}];
  finalData:any=[{}]
  constructor(private http:HttpClient){}
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<PeriodicElement>(this.finalData);
  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
  }
 
  
  displayedColumns: string[] = ['name', 'subject', 'startDate', 'endDate'];
  p:any=[{}]
  filteredData:PeriodicElement[]=[];
  

  ngOnInit(){
      
        console.log(this.data);
        this.p=this.data;
        console.log(this.p);
        const currentDate = new Date(); 
      this.filteredData= this.p.filter(data => {
        const startDate = this.parseDate(data.startDate); 
        const endDate = this.parseDate(data.endDate); 
        return currentDate >= startDate && currentDate >= endDate ; 
      });
    
    
       this.dataSource=new MatTableDataSource<PeriodicElement>(this.filteredData);
     
   
    }
  
    parseDate(dateString: string): Date {
      const [day, month, year] = dateString.split('-').map(Number);
      return new Date(year, month - 1, day);
    }
  

}
