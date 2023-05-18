import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  data:any=[]
  filteredData:any=[]
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get("https://localhost:7298/api/Assignment").subscribe(data=>{
      console.log("From Home Componenet",data);
      this.data=data;

  });
  this.http.get("https://localhost:7298/api/AssignmentFiltered").subscribe(data=>{
    console.log("From Home Componenet",data);
    this.filteredData=data;

});
  }

}
