import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,OnDestroy {
  // title = 'my-angular-app';
  x:number;
  y:number;
  msg:string;
  employee : any;

  constructor(){
    this.x=10;
    this.y=20;
    this.msg="";
    this.sayHello();
    this.employee={
      name : 'anurag gupta',
      city: 'bhopal'
    };
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
