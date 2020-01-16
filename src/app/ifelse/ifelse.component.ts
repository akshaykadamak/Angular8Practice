import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.scss']
})
export class IfelseComponent implements OnInit {

  a: any;

  constructor() { }

  ngOnInit() {
    this.test();
  }

  test() {
    this.a = 1;
    if(this.a==1) {
      console.log("true");
    }
    else
    {
      console.log("false");
    }
  }

}
