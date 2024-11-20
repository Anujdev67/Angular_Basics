import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgIf,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,OnDestroy {
  // title = 'my-angular-app';
  x:any;  // for all datatypes
  y:any;
  msg:any;
  employee : any;
  data: any;
isLoggedIn:boolean=false;
numArray:any[];
  constructor(){
    this.x=10;
    this.y=20;
    this.msg="";
    this.sayHello();
    this.employee={
      name : 'anurag gupta',
      city: 'bhopal',
      address : ""
    };
    this.numArray=[1,2,3,4,5,6];
  }
  showAddress(){
    this.employee.address = "85,Near napier Town ,484114";
  }
  loadData(){
    this.data = "sample data";
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  sayHello(){
    this.msg="Hellp Anurag!";
  }
}
