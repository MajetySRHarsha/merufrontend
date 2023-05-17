import { Component } from '@angular/core';
import {FormBuilder, FormControl,FormGroup} from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';
import { DatePipe, Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  data={
    name:'',
    subject:'',
    startDate:'',
    endDate:''
  }

  floatLabelControl = new FormControl('auto' as FloatLabelType);

  options = this._formBuilder.group({
  
    floatLabel: this.floatLabelControl,
      name: '',
      subject: '',
      startDate: '',
      endDate: ''
  });
    startDateStr!:string | undefined;
    startFormattedDate!:string | undefined;

    endDateStr!:string | undefined;
    endFormattedDate!:string | undefined;
    
  constructor(private _formBuilder: FormBuilder, private _location:Location,private http: HttpClient) {
    
    
  }
  onSubmit(){
    
    const datepipe: DatePipe=new DatePipe('en-US');;
    console.log(this.options.value);

    this.startDateStr=this.options.controls['startDate'].value?.toString();
    this.startFormattedDate = datepipe.transform(this.options.controls['startDate'].value?.toString(), 'dd-MM-yyyy')?.toString();
    
    this.endDateStr=this.options.controls['endDate'].value?.toString();
    this.endFormattedDate = datepipe.transform(this.options.controls['endDate'].value?.toString(), 'dd-MM-yyyy')?.toString();
    
    this.data.name=this.options.controls['name'].value?this.options.controls['name'].value:'';
    this.data.subject=this.options.controls['subject'].value?this.options.controls['subject'].value:'';
    this.data.startDate=this.startFormattedDate;
    this.data.endDate=this.endFormattedDate;
    
    console.log(this.data);
    this.http.post('https://localhost:7298/api/Assignment', this.data)
  .subscribe(response => {
    console.log('Response:', response);
    this._location.back();
  });
  
    
    

  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });
  
  

}
