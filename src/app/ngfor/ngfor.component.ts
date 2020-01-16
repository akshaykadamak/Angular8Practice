import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {

  model: any;
  constructor() {
    this.model = [
      {
        firstname: 'Akshay',
        lastname: 'Kadam'
      },
      {
        firstname: 'prasad',
        lastname: 'kadam'
      }
    ]
  }

  ngOnInit() {
  }

}
