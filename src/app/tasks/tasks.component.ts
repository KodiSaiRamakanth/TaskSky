import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  ClassifficationSaveForm:FormGroup;
  yearlist:any=[];
  monthlist:any=[];
  
  viewData:any=[];
  submitted:any = false;
  disableshowbutton: any = false;
  showbutton: any = "Show";
  constructor(private api:ApiService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.addyearandmonth();


    this.ClassifficationSaveForm = this.formBuilder.group({
      yearSelect: ['',Validators.required],
      monthSelect: ['',Validators.required],

    });

  }
  get f() { return this.ClassifficationSaveForm.controls; }

  addyearandmonth(){
  
    for(let i=2010;i<=2019;i++){
      let data ={
        year:i
      }
      this.yearlist.push(data);
    }
    for(let i=1;i<=12;i++){
      let data ={
        month:i
      }
      this.monthlist.push(data);
    }
  
  console.log(this.yearlist)
  }

  AddToGrid(){
    debugger
    this.viewData =[];
    this.submitted = true;
    this.showbutton="Processing";
    this.disableshowbutton=true;

    if(this.ClassifficationSaveForm.valid){

      let sendData = this.ClassifficationSaveForm.controls.yearSelect.value+"/"+this.ClassifficationSaveForm.controls.monthSelect.value;

      let response:any=[];
      //API Call
      this.api.getAPI(sendData).subscribe(res =>{
        debugger
        response = res
        console.log(response.response.docs)
        this.viewData = response.response.docs;
        this.showbutton="Show";
        this.disableshowbutton=false;
      });
    }    
    
    
   

   
  }

}
