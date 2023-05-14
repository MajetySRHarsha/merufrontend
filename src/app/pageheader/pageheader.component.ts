import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pageheader',
  templateUrl: './pageheader.component.html',
  styleUrls: ['./pageheader.component.css']
})
export class PageheaderComponent {
  constructor(private router:Router){

  }
  redirectToForm(){
    this.router.navigate(['form']);
  }

}
